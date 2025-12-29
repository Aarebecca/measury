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
  Arial: {
    varName: 'Arial',
    fileName: 'Arial',
    displayName: 'Arial',
  },
  'Alibaba PuHuiTi': {
    varName: 'AlibabaPuHuiTi',
    fileName: 'AlibabaPuHuiTi',
    displayName: 'Alibaba PuHuiTi (阿里巴巴普惠体)',
  },
  'Comic Sans MS': {
    varName: 'ComicSansMS',
    fileName: 'ComicSansMS',
    displayName: 'Comic Sans MS',
  },
  Georgia: {
    varName: 'Georgia',
    fileName: 'Georgia',
    displayName: 'Georgia',
  },
  'Helvetica Neue': {
    varName: 'HelveticaNeue',
    fileName: 'HelveticaNeue',
    displayName: 'Helvetica Neue',
  },
  Menlo: {
    varName: 'Menlo',
    fileName: 'Menlo',
    displayName: 'Menlo',
  },
  'Microsoft YaHei': {
    varName: 'MicrosoftYaHei',
    fileName: 'MicrosoftYaHei',
    displayName: 'Microsoft YaHei',
  },
  Monaco: {
    varName: 'Monaco',
    fileName: 'Monaco',
    displayName: 'Monaco',
  },
  PingFang: {
    varName: 'PingFang',
    fileName: 'PingFang',
    displayName: 'PingFang',
  },
  Roboto: {
    varName: 'Roboto',
    fileName: 'Roboto',
    displayName: 'Roboto',
  },
  'SF Pro': {
    varName: 'SFPro',
    fileName: 'SFPro',
    displayName: 'SF Pro',
  },
  'Segoe UI': {
    varName: 'SegoeUI',
    fileName: 'SegoeUI',
    displayName: 'Segoe UI',
  },
  SimHei: {
    varName: 'SimHei',
    fileName: 'SimHei',
    displayName: 'SimHei',
  },
  SimSun: {
    varName: 'SimSun',
    fileName: 'SimSun',
    displayName: 'SimSun',
  },
  'Source Han Sans': {
    varName: 'SourceHanSans',
    fileName: 'SourceHanSans',
    displayName: 'Source Han Sans (思源黑体)',
  },
  'Source Han Serif': {
    varName: 'SourceHanSerif',
    fileName: 'SourceHanSerif',
    displayName: 'Source Han Serif (思源宋体)',
  },
  'Times New Roman': {
    varName: 'TimesNewRoman',
    fileName: 'TimesNewRoman',
    displayName: 'Times New Roman',
  },
  Times: {
    varName: 'Times',
    fileName: 'Times',
    displayName: 'Times',
  },
  'LXGW WenKai': {
    varName: 'LXGWWenKai',
    fileName: 'LXGWWenKai',
    displayName: 'LXGW WenKai (霞鹜文楷)',
  },
  '851tegakizatsu': {
    varName: '_851tegakizatsu',
    fileName: '851tegakizatsu',
    displayName: '851tegakizatsu (851手写杂字)',
  },
};

// 字体的完整 metrics 映射（与代码库保持一致）
const fontMetrics = {
  Arial: {
    ascender: 2189,
    descender: -555,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  'Alibaba PuHuiTi': {
    ascender: 1060,
    descender: -340,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  'Source Han Sans': {
    ascender: 880,
    descender: -120,
    lineGap: 500,
    unitsPerEm: 1000,
  },
  'Source Han Serif': {
    ascender: 1151,
    descender: -286,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  'LXGW WenKai': {
    ascender: 928,
    descender: -256,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  '851tegakizatsu': {
    ascender: 880,
    descender: -144,
    lineGap: 0,
    unitsPerEm: 1024,
  },
  'Comic Sans MS': {
    ascender: 2257,
    descender: -597,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  Georgia: {
    ascender: 1878,
    descender: -449,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  Helvetica: {
    ascender: 1577,
    descender: -471,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  'Microsoft YaHei': {
    ascender: 2167,
    descender: -536,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  Monaco: {
    ascender: 2048,
    descender: -512,
    lineGap: 171,
    unitsPerEm: 2048,
  },
  'PingFang SC Regular': {
    ascender: 1060,
    descender: -340,
    lineGap: 0,
    unitsPerEm: 1000,
  },
  Roboto: {
    ascender: 1900,
    descender: -500,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  'Segoe UI': {
    ascender: 2210,
    descender: -514,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  'SF Pro': {
    ascender: 1950,
    descender: -494,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  SimHei: {
    ascender: 220,
    descender: -36,
    lineGap: 36,
    unitsPerEm: 256,
  },
  SimSun: {
    ascender: 220,
    descender: -36,
    lineGap: 36,
    unitsPerEm: 256,
  },
  Times: {
    ascender: 1536,
    descender: -512,
    lineGap: 0,
    unitsPerEm: 2048,
  },
  'Times New Roman': {
    ascender: 1825,
    descender: -443,
    lineGap: 87,
    unitsPerEm: 2048,
  },
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
  900: 'Black',
};
