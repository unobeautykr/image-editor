import { Box } from "@mui/system";
import { useElementSize } from "./useElementSize";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { EditorCanvas } from "./EditorCanvas";
import { Toolbar } from "./Toolbar/Toolbar";
import { EditorCore } from "./EditorCore";
import { BoilerplateData } from "./types";

interface ImageEditorContextValue {
  core: EditorCore;
  touch: boolean;
  boilerplate?: {
    onLoadBoilerplate: () => Promise<BoilerplateData[]>;
    onSaveBoilerplate: (contents: string) => Promise<void>;
    onDeleteBoilerplate: (id: number) => Promise<void>;
  };
}

interface ImageEditorProviderProps {
  editorRef: React.Ref<HTMLElement>;
  imageUrl: string;
  children: React.ReactNode;
  boilerplate?: ImageEditorContextValue["boilerplate"];
  touch?: boolean;
}

const ImageEditorContext = createContext<ImageEditorContextValue | null>(null);

const ImageEditorProvider = ({
  editorRef,
  imageUrl,
  children,
  touch = true,
  boilerplate,
}: ImageEditorProviderProps) => {
  const core = useMemo(() => {
    return new EditorCore({
      imageUrl,
      touchEnabled: touch,
    });
  }, [imageUrl, touch]);

  useImperativeHandle(
    editorRef,
    () => {
      return {
        getDataUrl(format) {
          return core.getDataUrl(format);
        },
        isDirty() {
          return core.isDirty();
        },
        isBusy() {
          return core.busy;
        },
      };
    },
    [core]
  );

  const value: ImageEditorContextValue = useMemo(
    () => ({
      core,
      boilerplate,
      touch,
    }),
    [boilerplate, core, touch]
  );

  return (
    <ImageEditorContext.Provider value={value}>
      {children}
    </ImageEditorContext.Provider>
  );
};

export function useImageEditor() {
  return useContext(ImageEditorContext) as ImageEditorContextValue;
}

export function useTool() {
  const { core } = useImageEditor();

  const [tool, setTool] = useState(core.tool?.name);

  useEffect(() => {
    return core.on(EditorCore.Event.TOOL_CHANGE, (t) => setTool(t));
  }, [core]);

  const selectTool = (t) => {
    core.selectTool(t);
  };

  return { tool, setTool: selectTool };
}

export interface ImageEditorProps {
  viewOnly?: boolean;
  imageUrl: string;
  boilerplate?: ImageEditorContextValue["boilerplate"];
  touch?: boolean;
}

export const ImageEditor = forwardRef<HTMLElement, ImageEditorProps>(
  function ImageEditor(
    { viewOnly = false, imageUrl, boilerplate, touch },
    ref
  ) {
    const containerRef = useRef<HTMLElement | null>(null);

    const containerSize = useElementSize(containerRef);

    return (
      <ImageEditorProvider
        editorRef={ref}
        imageUrl={imageUrl}
        boilerplate={boilerplate}
        touch={touch}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Box
            ref={containerRef}
            sx={{
              overflow: "hidden",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {containerSize && <EditorCanvas containerSize={containerSize} />}
          </Box>
          {!viewOnly && <Toolbar />}
        </Box>
      </ImageEditorProvider>
    );
  }
);
