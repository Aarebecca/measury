# 浏览器测试工具

在浏览器中验证文本测量准确性。

## 快速开始

字体文件已放置在 `fonts/*.ttf`

```bash
npm run test:browser
```

浏览器打开后：
1. 等待顶部显示 ✅ 字体加载成功
2. 输入文本、字体、字号等参数
3. 点击"测量"获取实际宽高
4. 复制生成的测试代码到测试文件

## 使用其他字体

如需测试其他字体文件：

1. 将字体文件放到 `fonts/` 目录
2. 修改 `index.html` 中的 `@font-face`：

```html
@font-face {
  font-family: 'YourFont';
  src: url('./fonts/YourFont.ttf') format('truetype');
}
```

## 注意事项

- 不同浏览器可能有 ±0.5px 的测量差异
- 使用 `toBeCloseTo(value, 1)` 允许 ±0.05px 误差
- 确保浏览器使用了正确的字体（检查开发者工具）
