import { Box } from "@mui/system";
import { useElementSize } from "./useElementSize";
import {
  ReactNode,
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
  toolbarPosition: "bottom" | "right";
}

interface ImageEditorProviderProps {
  editorRef: React.Ref<HTMLElement>;
  imageUrl: string;
  children: React.ReactNode;
  boilerplate?: ImageEditorContextValue["boilerplate"];
  touch?: boolean;
  toolbarPosition: "bottom" | "right";
}

const ImageEditorContext = createContext<ImageEditorContextValue | null>(null);

const ImageEditorProvider = ({
  editorRef,
  imageUrl,
  children,
  touch = true,
  boilerplate,
  toolbarPosition,
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
        getDataUrl(format: string) {
          return core.getDataUrl(format);
        },
        toBlob() {
          return core.toBlob();
        },
        isDirty() {
          return core.isDirty();
        },
        isBusy() {
          return core.busy;
        },
      } as any;
    },
    [core]
  );

  const value: ImageEditorContextValue = useMemo(
    () => ({
      core,
      boilerplate,
      touch,
      toolbarPosition,
    }),
    [boilerplate, core, touch, toolbarPosition]
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
  const { core }: any = useImageEditor();

  const [tool, setTool] = useState(core.tool?.name);

  useEffect(() => {
    return core.on(EditorCore.Event.TOOL_CHANGE, (t: any) => setTool(t));
  }, [core]);

  const selectTool = (t: any) => {
    core.selectTool(t);
  };

  return { tool, setTool: selectTool };
}

export interface ImageEditorProps {
  viewOnly?: boolean;
  imageUrl: string;
  boilerplate?: ImageEditorContextValue["boilerplate"];
  touch?: boolean;
  toolbarPosition?: "bottom" | "right";
  leadingItems?: ReactNode;
}

export const ImageEditor = forwardRef<HTMLElement, ImageEditorProps>(
  function ImageEditor(
    {
      viewOnly = false,
      imageUrl,
      boilerplate,
      touch,
      toolbarPosition = "bottom",
      leadingItems,
    },
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
        toolbarPosition={toolbarPosition}
      >
        <Box
          sx={{
            backgroundColor: "#f5f5f8",
            height: "100%",
            display: "flex",
            flexDirection: toolbarPosition === "right" ? "row" : "column",
          }}
        >
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
          {!viewOnly && <Toolbar leadingItems={leadingItems} />}
        </Box>
      </ImageEditorProvider>
    );
  }
);
