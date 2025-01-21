# UNO Image Penchart

Penchart is a React-based image annotation library that provides a powerful and flexible drawing interface. It's built on top of Fabric.js with custom implementations for various drawing tools and features.

## Features

- Multiple drawing tools:
  - Freedraw tool for freehand drawing
  - Marker tool for highlighting
  - Eraser tool
  - Text tool for adding text annotations
  - Pan tool for navigation
  - Selection tool for manipulating objects
  - Timestamp tool
- Touch device support with pencil mode
- Zoom and pan capabilities
- Undo/Redo functionality
- History management
- Customizable toolbar positioning (bottom or right)
- Configurable tool settings (color, thickness, etc.)
- Image export capabilities (PNG/JPEG)

## Tech Stack

- React
- MobX for state management
- Material-UI (MUI) for UI components
- Fabric.js for canvas manipulation

## Usage

```jsx
import { ImageEditor } from 'penchart';

function App() {
  return (
    <ImageEditor
      imageUrl="path/to/image.jpg"
      touch={true}
      toolbarPosition="bottom"
      viewOnly={false}
    />
  );
}
```

### Props

- `imageUrl` (required): URL of the image to annotate
- `viewOnly` (optional): Set to true to disable editing capabilities
- `touch` (optional): Enable/disable touch support
- `toolbarPosition` (optional): Position of the toolbar ('bottom' | 'right')
- `boilerplate` (optional): Boilerplate data configuration
- `leadingItems` (optional): Additional toolbar items

## Features in Detail

### Drawing Tools

- **Freedraw**: Freehand drawing with customizable color and thickness
- **Marker**: Highlighting tool with adjustable thickness
- **Eraser**: Remove drawn content
- **Text**: Add and edit text with customizable size and color
- **Pan**: Navigate around the canvas
- **Select**: Select and manipulate objects
- **Timestamp**: Add timestamp annotations

### Configuration

Tools can be configured with various settings:
- Colors (preset or custom)
- Line thickness
- Text size
- Pencil mode for touch devices

### History Management

- Undo/Redo functionality
- Automatic history tracking
- History caching capabilities

### Export Options

- Export as PNG or JPEG
- Export specific regions
- Save as Blob

## Development

The project uses a custom implementation of Fabric.js for canvas manipulation, with React components for the UI layer. The state management is handled by MobX, ensuring efficient updates and reactivity.
