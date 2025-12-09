/**
 * 字体名称映射配置
 * 
 * 添加新字体时，需要在此文件中添加映射关系：
 * - key: CSS 中的 font-family 名称（与 fonts.css 中的保持一致）
 * - varName: 用于生成 JavaScript 变量名（不能包含空格和特殊字符）
 * - fileName: src/fonts/ 目录下的字体文件名前缀
 * - displayName: 在下拉框中显示的名称（可选，如果不提供则使用 key）
 */
const fontMapping = {
  'Alibaba PuHuiTi': {
    varName: 'AlibabaPuHuiTi',
    fileName: 'AlibabaPuHuiTi',
    displayName: 'Alibaba PuHuiTi (阿里巴巴普惠体)'
  },
  'Source Han Sans': {
    varName: 'SourceHanSans',
    fileName: 'SourceHanSans',
    displayName: 'Source Han Sans (思源黑体)'
  },
  'Source Han Serif': {
    varName: 'SourceHanSerif',
    fileName: 'SourceHanSerif',
    displayName: 'Source Han Serif (思源宋体)'
  }
};

/**
 * 字重到字体样式名称的映射
 * 用于生成导入语句中的字体样式后缀
 */
const weightToStyle = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black'
};
