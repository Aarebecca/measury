# text-width

A lightweight JavaScript library for estimating text width and height in non-browser environments.

Unlike heavier solutions like `node-canvas` or `opentype`, this library provides a lightweight alternative for approximate text measurements based on font metrics configuration.

## Features

- 🪶 Lightweight - minimal dependencies
- 🎨 Configurable font metrics
- 📏 Estimates text width and height
- 🔧 Easy to extend with custom fonts
- 🚀 Works in Node.js and other non-browser environments

## Installation

```bash
npm install text-width
```

## Usage

### Basic Usage

```javascript
const { measureText } = require('text-width');

// Measure text with default font (sans-serif, 16px)
const result = measureText('Hello World');
console.log(result);
// {
//   width: 55,
//   height: 20,
//   lineHeight: 20,
//   lines: 1,
//   totalHeight: 20,
//   fontSize: 16
// }

// Measure with custom font size and family
const result2 = measureText('Hello World', {
  fontSize: 24,
  fontFamily: 'Arial'
});
console.log(result2);
```

### Adding Custom Fonts

```javascript
const { addFont, measureText } = require('text-width');

// Add custom font metrics
addFont('MyCustomFont', {
  avgCharWidth: 0.55,   // ratio of character width to font size
  avgCharHeight: 1.2,   // ratio of character height to font size
  spaceWidth: 0.3,      // ratio of space width to font size
  lineHeight: 1.2       // ratio of line height to font size
});

// Use the custom font
const result = measureText('Custom Font Text', {
  fontSize: 18,
  fontFamily: 'MyCustomFont'
});
```

### Creating a Custom Measurer Instance

```javascript
const { createMeasurer, FontConfig } = require('text-width');

// Create a custom font configuration
const customConfig = new FontConfig();
customConfig.addFont('SpecialFont', {
  avgCharWidth: 0.5,
  avgCharHeight: 1.15,
  spaceWidth: 0.25,
  lineHeight: 1.3
});

// Create measurer with custom configuration
const measurer = createMeasurer(customConfig);
const result = measurer.measureText('Text', { fontFamily: 'SpecialFont' });
```

### Supported Default Fonts

The library comes with pre-configured metrics for common fonts:
- `monospace`
- `sans-serif`
- `serif`
- `Arial`
- `Times New Roman`
- `Courier New`

## API

### `measureText(text, style)`

Measures text dimensions using the default measurer.

**Parameters:**
- `text` (string): The text to measure
- `style` (object): Style configuration
  - `fontSize` (number|string): Font size in pixels (default: 16)
  - `fontFamily` (string): Font family name (default: 'sans-serif')

**Returns:** Object with measurement data:
- `width`: Estimated text width in pixels
- `height`: Estimated text height in pixels
- `lineHeight`: Line height in pixels
- `lines`: Number of lines (based on `\n` characters)
- `totalHeight`: Total height including all lines
- `fontSize`: The font size used for calculation

### `addFont(fontFamily, metrics)`

Adds a font to the default configuration.

**Parameters:**
- `fontFamily` (string): Font family name
- `metrics` (object): Font metrics
  - `avgCharWidth` (number): Average character width ratio
  - `avgCharHeight` (number): Average character height ratio
  - `spaceWidth` (number): Space character width ratio
  - `lineHeight` (number): Line height ratio

### `createMeasurer(fontConfig)`

Creates a new TextMeasurer instance with custom configuration.

**Parameters:**
- `fontConfig` (FontConfig): Optional custom font configuration

**Returns:** TextMeasurer instance

### `getFontConfig()`

Gets the default font configuration instance.

**Returns:** FontConfig instance

## How It Works

This library uses pre-configured font metrics (character width ratios, line heights, etc.) to estimate text dimensions. The measurements are approximations based on average character widths and are suitable for layout calculations where exact precision is not critical.

For more accurate measurements in browser environments, consider using Canvas `measureText()` API. For Node.js environments requiring high precision, consider `node-canvas` or `opentype.js`.

## License

MIT
