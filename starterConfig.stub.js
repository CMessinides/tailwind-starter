const sharedSpacing = {
  px: "1px",
  "0": "0"
};

const spacingSizes = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  "2xl": 96,
  "3xl": 144,
  "4xl": 240
};

const remSpacing = transformSizes(spacingSizes, toRem);
const pxSpacing = transformSizes(spacingSizes, toPx, "-px");

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 28,
  "2xl": 40,
  "3xl": 56,
  "4xl": 72,
  "5xl": 96,
  "6xl": 120
};

const remFontSizes = transformSizes(fontSizes, toRem);
const pxFontSizes = transformSizes(fontSizes, toPx, "-px");

function toRem(size) {
  return `${size / 16}rem`;
}

function toPx(size) {
  return `${size}px`;
}

function transformSizes(sizeMap = {}, transform = x => x, suffix = "") {
  return Object.keys(sizeMap).reduce(function(acc, key) {
    return {
      ...acc,
      [key + suffix]: transform(sizeMap[key])
    };
  }, {});
}

module.exports = {
  padding: {
    ...sharedSpacing,
    ...pxSpacing,
    ...remSpacing
  },

  margin: {
    auto: "auto",
    ...sharedSpacing,
    ...pxSpacing,
    ...remSpacing
  },

  negativeMargin: {
    ...sharedSpacing,
    ...pxSpacing,
    ...remSpacing
  },

  textSizes: {
    ...pxFontSizes,
    ...remFontSizes
  }
};
