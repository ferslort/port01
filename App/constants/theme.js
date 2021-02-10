import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const COLORS = {
  white: "white",
  black: "black",
  gray: "grey",
  blue: "#0682FE",
};

export const SIZE = {
  // Sizes Globals
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  //fonts
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  p1: 30,
  p2: 22,
  p3: 16,
  p4: 14,

  //size Window
  width,
  height,
};

export const FONTS = {
  h1: { fontFamily: "robotoBlack", fontSize: SIZE.h1 },
  h2: { fontFamily: "robotoRegular", fontSize: SIZE.h2 },
  h3: { fontFamily: "robotoRegular", fontSize: SIZE.h3 },
  h4: { fontFamily: "robotoRegular", fontSize: SIZE.h4 },

  p1: { fontFamily: "robotoBlack", fontSize: SIZE.p1 },
  p2: { fontFamily: "robotoBold", fontSize: SIZE.p2 },
  p3: { fontFamily: "robotoLigth", fontSize: SIZE.p3 },
  p4: { fontFamily: "robotoRegular", fontSize: SIZE.p4 },
};

const appTheme = { COLORS, FONTS, SIZE };

export default appTheme;
