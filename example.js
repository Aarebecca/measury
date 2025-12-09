const { measureText, addFont, createMeasurer, FontConfig } = require('./lib');

console.log('=== Basic Usage Examples ===\n');

// Example 1: Basic measurement
console.log('Example 1: Basic text measurement');
const result1 = measureText('Hello World');
console.log('Text: "Hello World"');
console.log('Result:', result1);
console.log();

// Example 2: Custom font size
console.log('Example 2: Custom font size');
const result2 = measureText('Hello World', { fontSize: 24 });
console.log('Text: "Hello World" (fontSize: 24)');
console.log('Result:', result2);
console.log();

// Example 3: Different font family
console.log('Example 3: Different font family');
const result3 = measureText('Hello World', {
  fontSize: 16,
  fontFamily: 'monospace',
});
console.log('Text: "Hello World" (fontFamily: monospace)');
console.log('Result:', result3);
console.log();

// Example 4: Multi-line text
console.log('Example 4: Multi-line text');
const result4 = measureText('Line 1\nLine 2\nLine 3', { fontSize: 14 });
console.log('Text: "Line 1\\nLine 2\\nLine 3" (fontSize: 14)');
console.log('Result:', result4);
console.log();

// Example 5: Adding a custom font
console.log('Example 5: Adding custom font');
addFont('MyFont', {
  avgCharWidth: 0.55,
  avgCharHeight: 1.2,
  spaceWidth: 0.3,
  lineHeight: 1.2,
});
const result5 = measureText('Custom Font', {
  fontSize: 18,
  fontFamily: 'MyFont',
});
console.log('Text: "Custom Font" (fontFamily: MyFont, fontSize: 18)');
console.log('Result:', result5);
console.log();

// Example 6: Custom measurer instance
console.log('Example 6: Custom measurer instance');
const customConfig = new FontConfig();
customConfig.addFont('SpecialFont', {
  avgCharWidth: 0.6,
  avgCharHeight: 1.3,
  spaceWidth: 0.35,
  lineHeight: 1.4,
});
const measurer = createMeasurer(customConfig);
const result6 = measurer.measureText('Special Text', {
  fontSize: 20,
  fontFamily: 'SpecialFont',
});
console.log('Text: "Special Text" (fontFamily: SpecialFont, fontSize: 20)');
console.log('Result:', result6);
console.log();

console.log('=== All examples completed ===');
