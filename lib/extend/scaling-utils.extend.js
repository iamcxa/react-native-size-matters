import { Dimensions } from "react-native";
import {
  SIZE_MATTERS_BASE_WIDTH,
  SIZE_MATTERS_BASE_HEIGHT,
  SIZE_MATTERS_PAD_RATIO
} from "react-native-dotenv";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = SIZE_MATTERS_BASE_WIDTH || 350;
const guidelineBaseHeight = SIZE_MATTERS_BASE_HEIGHT || 680;

export const scale = size =>
  SIZE_MATTERS_PAD_RATIO
    ? (shortDimension / guidelineBaseWidth) * size * SIZE_MATTERS_PAD_RATIO
    : (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = size =>
  SIZE_MATTERS_PAD_RATIO
    ? (longDimension / guidelineBaseHeight) * size * SIZE_MATTERS_PAD_RATIO
    : (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
