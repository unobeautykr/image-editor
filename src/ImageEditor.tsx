import {
  Fragment,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box } from './ImageEditor.styled';
import { observer } from 'mobx-react';
import { useElementSize } from './useElementSize';
import { EditorCanvas } from './EditorCanvas';
import { Toolbar } from './Toolbar/Toolbar';
import { EditorCore } from './EditorCore';
import { BoilerplateData } from './types';
import toolbarSettings from '~/store/toolbarSettings';
import { EditorMode, ToolbarPosition } from './types/editor';

interface ImageEditorContextValue {
  core: EditorCore;
  touch: boolean;
  boilerplate?: {
    onLoadBoilerplate: () => Promise<BoilerplateData[]>;
    onSaveBoilerplate: (contents: any) => Promise<void>;
    onDeleteBoilerplate: (id: number) => Promise<void>;
  }[];
  toolbarPosition: ToolbarPosition;
}

interface ImageEditorProviderProps {
  editorRef: React.Ref<HTMLElement>;
  imageUrl: string;
  children: React.ReactNode;
  boilerplate?: ImageEditorContextValue['boilerplate'];
  touch?: boolean;
  toolbarPosition: ToolbarPosition;
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
    (): any => {
      return {
        getDataUrl(format: any) {
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
      };
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
  const { core } = useImageEditor();

  const [tool, setTool] = useState((core.tool as any)?.name);

  useEffect(() => {
    return core.on(EditorCore.Event.TOOL_CHANGE, (t: any) => setTool(t));
  }, [core]);

  const selectTool = (t: any) => {
    core.selectTool(t);
  };

  return { tool, setTool: selectTool };
}

const Canvas = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const containerSize = useElementSize(containerRef);

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: 'hidden',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {containerSize && <EditorCanvas containerSize={containerSize} />}
    </Box>
  );
};

export interface ImageEditorProps {
  viewOnly?: boolean;
  imageUrl: string;
  boilerplate?: ImageEditorContextValue['boilerplate'];
  touch?: boolean;
  toolbarPosition?: ToolbarPosition;
  leadingItems?: ReactNode;
  mode?: EditorMode;
}

export const ImageEditor = observer(
  forwardRef<HTMLElement, ImageEditorProps>(function ImageEditor(
    {
      viewOnly = false,
      imageUrl,
      boilerplate,
      touch,
      toolbarPosition = 'bottom',
      leadingItems,
      mode = 'image',
    },
    ref
  ) {
    const { toolbarVerticalPosition } = toolbarSettings;
    const components = useMemo(() => {
      const original = [
        {
          component: <Canvas />,
        },
        {
          component: (
            <>
              {!viewOnly && (
                <Box
                  className="toolbar-wrapper-box"
                  toolbarPosition={toolbarPosition}
                >
                  <Toolbar leadingItems={leadingItems} mode={mode} />
                </Box>
              )}
            </>
          ),
        },
      ];
      return toolbarVerticalPosition === 'bottom'
        ? original
        : original.reverse();
    }, [toolbarVerticalPosition]);

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
            backgroundColor: '#f5f5f8',
            height: '100%',
            display: 'flex',
            flexDirection: toolbarPosition === 'right' ? 'row' : 'column',
          }}
        >
          {components.map((item, index) => {
            return <Fragment key={index}>{item.component}</Fragment>;
          })}
        </Box>
      </ImageEditorProvider>
    );
  })
);
