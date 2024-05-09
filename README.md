# Vertical Dock Component (macOS inspired)


## Overview:

The Vertical Dock component is a React component designed to create a vertical dock of icons that respond to mouse movement. It utilizes the Framer Motion library for animations and responsiveness.

## Usage:

To use the Vertical Dock component, follow these steps:

1. Import the VerticalDock component into your React application.
2. Pass an array of icon objects as a prop to the VerticalDock component. Each icon object should contain `passive` and `active` paths for the icon images.
3. Icons in the dock will respond to mouse movement, changing their height and appearance based on the mouse position.

## Example:

```jsx
import VerticalDock from './VerticalDock';

const icons = [
  { passive: 'path/to/passive-icon.png', active: 'path/to/active-icon.png' },
  // Add more icon objects as needed
];

function App() {
  return (
    <div className="App">
      <VerticalDock icons={icons} />
    </div>
  );
}

export default App;
```

## Props

The Vertical Dock component accepts the following props:

- **icons**: An array of icon objects containing `passive` and `active` paths for icon images. Each icon object should have the following structure:

```javascript
{
  passive: 'path/to/passive-icon.png',
  active: 'path/to/active-icon.png'
}
```

## Installation

To use the Vertical Dock component in your project, follow these steps:

1. Install the required dependencies by running the following commands:

```bash
npm install
```

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
