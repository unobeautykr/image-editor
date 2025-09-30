import { Button, Box, CssBaseline } from '@mui/material';
import { useMemo, useRef } from 'react';
import sampleImage from '../samples/highres-portrait.jpeg';
import { ImageEditor, ImageEditorProps } from './ImageEditor';
import sampleImage1 from './assets/images/sample_images/cat1.jpg';
import sampleImage2 from './assets/images/sample_images/cat2.png';
import sampleImage3 from './assets/images/sample_images/cat3.jpeg';
import sampleImage4 from './assets/images/sample_images/cat4.png';
import sampleImage5 from './assets/images/sample_images/cat5.jpeg';
import { downloadBlob } from './utils/fileUtil';
import { ImageEditorRef } from './ImageEditor';

const sampleJson = {
  objects: [
    {
      type: 'i-text',
      version: '5.2.1',
      originX: 'left',
      originY: 'top',
      left: 162.99,
      top: -398.41,
      width: 133.42,
      height: 58.1,
      fill: '#d82735',
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: 'butt',
      strokeDashOffset: 0,
      strokeLineJoin: 'miter',
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 3.74,
      scaleY: 3.74,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: null,
      visible: true,
      backgroundColor: '',
      fillRule: 'nonzero',
      paintFirst: 'fill',
      globalCompositeOperation: 'source-over',
      skewX: 0,
      skewY: 0,
      erasable: false,
      fontFamily: 'Times New Roman',
      fontWeight: 'normal',
      fontSize: 51.41405588484335,
      text: '고객명',
      underline: false,
      overline: false,
      linethrough: false,
      textAlign: 'left',
      fontStyle: 'normal',
      lineHeight: 1.16,
      textBackgroundColor: '',
      charSpacing: 0,
      styles: {},
      direction: 'ltr',
      path: null,
      pathStartOffset: 0,
      pathSide: 'left',
      pathAlign: 'baseline',
      relativeLeft: 0.06815986128931902,
      relativeTop: 0.050497536756215905,
      relativeScale: 0.035047072859470584,
      originalType: 'i-text',
    },
    {
      type: 'i-text',
      version: '5.2.1',
      originX: 'left',
      originY: 'top',
      left: 682.84,
      top: 223.78,
      width: 177.89,
      height: 58.1,
      fill: '#d82735',
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: 'butt',
      strokeDashOffset: 0,
      strokeLineJoin: 'miter',
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 2.93,
      scaleY: 2.93,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: null,
      visible: true,
      backgroundColor: '',
      fillRule: 'nonzero',
      paintFirst: 'fill',
      globalCompositeOperation: 'source-over',
      skewX: 0,
      skewY: 0,
      erasable: false,
      fontFamily: 'Times New Roman',
      fontWeight: 'normal',
      fontSize: 51.41405588484335,
      text: '주민번호',
      underline: false,
      overline: false,
      linethrough: false,
      textAlign: 'left',
      fontStyle: 'normal',
      lineHeight: 1.16,
      textBackgroundColor: '',
      charSpacing: 0,
      styles: {},
      direction: 'ltr',
      path: null,
      pathStartOffset: 0,
      pathSide: 'left',
      pathAlign: 'baseline',
      relativeLeft: 0.42252005307853807,
      relativeTop: 0.33330871372488646,
      relativeScale: 0.035047072859470584,
      originalType: 'i-text',
    },
    {
      type: 'i-text',
      version: '5.2.1',
      originX: 'left',
      originY: 'top',
      left: 323.31,
      top: 1339.61,
      width: 177.89,
      height: 58.1,
      fill: '#d82735',
      stroke: null,
      strokeWidth: 1,
      strokeDashArray: null,
      strokeLineCap: 'butt',
      strokeDashOffset: 0,
      strokeLineJoin: 'miter',
      strokeUniform: false,
      strokeMiterLimit: 4,
      scaleX: 1,
      scaleY: 1,
      angle: 0,
      flipX: false,
      flipY: false,
      opacity: 1,
      shadow: null,
      visible: true,
      backgroundColor: '',
      fillRule: 'nonzero',
      paintFirst: 'fill',
      globalCompositeOperation: 'source-over',
      skewX: 0,
      skewY: 0,
      erasable: false,
      fontFamily: 'Times New Roman',
      fontWeight: 'normal',
      fontSize: 51.41405588484335,
      text: '작성일자',
      underline: false,
      overline: false,
      linethrough: false,
      textAlign: 'left',
      fontStyle: 'normal',
      lineHeight: 1.16,
      textBackgroundColor: '',
      charSpacing: 0,
      styles: {},
      direction: 'ltr',
      path: null,
      pathStartOffset: 0,
      pathSide: 'left',
      pathAlign: 'baseline',
      relativeLeft: 0.177444507358327,
      relativeTop: 0.8405060041567239,
      relativeScale: 0.035047072859470584,
      originalType: 'i-text',
    },
  ],
  version: '1.0',
  timestamp: 1755832349808,
  reference: {
    width: 1467,
    height: 2200,
    angle: 0,
  },
};

const customerTemplates = [
  {
    id: 1,
    contents: '고객명',
  },
  {
    id: 2,
    contents: '차트번호',
  },
  {
    id: 3,
    contents: '생년월일',
  },
  {
    id: 4,
    contents: '주민번호',
  },
  {
    id: 5,
    contents: '전화번호',
  },
  {
    id: 6,
    contents: '주소',
  },
  {
    id: 7,
    contents: '작성일자',
  },
];

let textBoilerplates = [
  {
    id: 1,
    contents: 'test',
  },
  {
    id: 2,
    contents: 'test2',
  },
];

let imageBoilerplates = [
  {
    id: 1,
    contents: {
      originalUrl: sampleImage1,
      thumbnailUrl: sampleImage1,
    },
  },
  {
    id: 2,
    contents: {
      originalUrl: sampleImage2,
      thumbnailUrl: sampleImage2,
    },
  },
  {
    id: 3,
    contents: {
      originalUrl: sampleImage3,
      thumbnailUrl: sampleImage3,
    },
  },
  {
    id: 4,
    contents: {
      originalUrl: sampleImage4,
      thumbnailUrl: sampleImage4,
    },
  },
  {
    id: 5,
    contents: {
      originalUrl: sampleImage5,
      thumbnailUrl: sampleImage5,
    },
  },
  {
    id: 6,
    contents: {
      originalUrl: sampleImage5,
      thumbnailUrl: null,
    },
  },
];

function App() {
  const boilerplate: ImageEditorProps['boilerplate'] = useMemo(
    () => [
      {
        onLoadBoilerplate: async () => {
          return textBoilerplates;
        },
        onSaveBoilerplate: async (contents: string) => {
          return console.log('save', contents);
        },
        onDeleteBoilerplate: async (id: number) => {
          textBoilerplates = textBoilerplates.filter((b) => b.id !== id);
        },
      },
      {
        onLoadBoilerplate: async () => {
          return imageBoilerplates;
        },
        onSaveBoilerplate: async (contents: Blob) => {
          downloadBlob(contents, 'savedImage.png');
          return console.log('save', contents);
        },
        onDeleteBoilerplate: async (id: number) => {
          imageBoilerplates = imageBoilerplates.filter((b) => b.id !== id);
        },
      },
      {
        onLoadBoilerplate: async () => {
          return customerTemplates;
        },
      },
    ],
    []
  );

  const editorRef = useRef<ImageEditorRef | null>(null);

  // const onClickSave = async (): Promise<void> => {
  //   try {
  //     const blob = await editorRef.current?.toBlob();
  //     if (blob) {
  //       const now = new Date();
  //       const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
  //       const filename = `edited-image-${timestamp}.png`;

  //       downloadBlob(blob, filename);
  //     } else {
  //       console.error('Failed to generate blob from editor');
  //     }
  //   } catch (error) {
  //     console.error('Error saving image:', error);
  //   }
  // };

  const handleJsonSave = async (): Promise<void> => {
    try {
      const json = await editorRef.current?.saveCanvasJson();
      console.log('JSON data:', json);
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  // const handleJsonLoad = async (): Promise<void> => {
  //   try {
  //     await editorRef.current?.loadCanvasJson(sampleJson);
  //   } catch (error) {
  //     console.error('Error saving image:', error);
  //   }
  // };

  return (
    <>
      <CssBaseline />
      <Box sx={{ width: '100vw', height: '100vh' }}>
        <ImageEditor
          ref={editorRef}
          imageUrl={sampleImage}
          boilerplate={boilerplate}
          customerTemplates={customerTemplates}
          touch={true}
          // viewOnly={true}
          mode="image" // template, image
          leadingItems={
            <div>
              {/* <Button onClick={onClickSave}>save</Button> */}
              <Button onClick={handleJsonSave}>템플릿저장</Button>
              {/* <Button onClick={handleJsonLoad}>템플릿로드</Button> */}
            </div>
          }
          toolbarPosition="bottom"
        />
      </Box>
    </>
  );
}

export default App;
