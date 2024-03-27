import { Box, CssBaseline } from '@mui/material';
import { useMemo, useRef } from 'react';
import sampleImage from '../samples/highres-portrait.jpeg';
import { ImageEditor, ImageEditorProps } from './ImageEditor';
import sampleImage1 from './assets/images/sample_images/cat1.jpg';
import sampleImage2 from './assets/images/sample_images/cat2.png';
import sampleImage3 from './assets/images/sample_images/cat3.jpeg';
import sampleImage4 from './assets/images/sample_images/cat4.png';
import sampleImage5 from './assets/images/sample_images/cat5.jpeg';
import { downloadBlob } from './utils/fileUtil';

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
    contents: sampleImage1,
  },
  {
    id: 2,
    contents: sampleImage2,
  },
  {
    id: 3,
    contents: sampleImage3,
  },
  {
    id: 4,
    contents: sampleImage4,
  },
  {
    id: 5,
    contents: sampleImage5,
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
    ],
    []
  );

  const editorRef = useRef<HTMLElement & any>(null);

  // const onClickSave = async () => {
  //   const blob = await editorRef.current?.toBlob();
  //   console.log(blob);
  // };

  return (
    <>
      <CssBaseline />
      <Box sx={{ width: '100vw', height: '100vh' }}>
        <ImageEditor
          ref={editorRef}
          imageUrl={sampleImage}
          boilerplate={boilerplate}
          // touch={false}
          // leadingItems={<Button onClick={onClickSave}>save</Button>}
          toolbarPosition="bottom"
        />
      </Box>
    </>
  );
}

export default App;
