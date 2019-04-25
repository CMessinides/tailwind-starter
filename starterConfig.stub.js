const sharedSpacing = {
  px: '1px',
  '0': '0',
}

const spacingSizes = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  '2xl': 96,
  '3xl': 144,
  '4xl': 240,
}

const pxSpacing = transformSizes(spacingSizes, toPx, '-px');
const remSpacing = transformSizes(spacingSizes, toRem, '-rm');

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
}

const pxFontSizes = transformSizes(fontSizes, toPx, '-px');
const remFontSizes = transformSizes(fontSizes, toRem, '-rm');

function toRem(size) {
  return `${size/16}rem`;
}

function toPx(size) {
  return `${size}px`;
}

function transformSizes(sizeMap = {}, transform = x => x, suffix = 't') {
  return Object.keys(sizeMap).reduce(function(acc, key) {
    return {
      ...acc,
      [key + suffix]: transform(sizeMap[key]),
    }
  }, {});
}

module.exports = {
  padding: {
    ...sharedSpacing,
    ...pxSpacing,
    ...remSpacing,
  },
  
  margin: {
    auto: 'auto',
    ...sharedSpacing,
    ...pxSpacing,
    ...remSpacing,
  },

  negativeMargin: {
    ...sharedSpacing,
    ...pxSpacing,
    ...remSpacing,
  },

  textSizes: {
    ...pxFontSizes,
    ...remFontSizes,
  },
}
