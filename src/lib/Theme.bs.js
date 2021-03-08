// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");

var black = "#070707";

var purple = "#743AF0";

var pink = "#FF68D5";

var shape01 = "#3C3C3C";

var shape02 = "#0D0D0D";

var gray1 = "7D7D7D";

var ColorsRaw = {
  black: black,
  purple: purple,
  pink: pink,
  shape01: shape01,
  shape02: shape02,
  gray1: gray1
};

function toBsHex(color) {
  return CssJs.hex(color.replace("#", ""));
}

var black$1 = toBsHex(black);

var purple$1 = toBsHex(purple);

var pink$1 = toBsHex(pink);

var shape01$1 = toBsHex(shape01);

var shape02$1 = toBsHex(shape02);

var white = toBsHex("FAFAFA");

var gray1$1 = toBsHex(gray1);

var text = toBsHex("CECECE");

var gradient = CssJs.linearGradient(CssJs.deg(180.0), {
      hd: [
        CssJs.pct(17.85),
        CssJs.hex("FF89DE")
      ],
      tl: {
        hd: [
          CssJs.pct(30.22),
          CssJs.hex("FF68D5")
        ],
        tl: {
          hd: [
            CssJs.pct(77.87),
            CssJs.hex("9361FF")
          ],
          tl: {
            hd: [
              CssJs.pct(118.28),
              CssJs.hex("743AF0")
            ],
            tl: /* [] */0
          }
        }
      }
    });

var darkGradient = CssJs.linearGradient(CssJs.deg(180.0), {
      hd: [
        CssJs.pct(17.85),
        CssJs.hex("20121c")
      ],
      tl: {
        hd: [
          CssJs.pct(30.22),
          CssJs.hex("20111b")
        ],
        tl: {
          hd: [
            CssJs.pct(77.87),
            CssJs.hex("19101e")
          ],
          tl: {
            hd: [
              CssJs.pct(118.28),
              CssJs.hex("190b38")
            ],
            tl: {
              hd: [
                CssJs.pct(118.28),
                CssJs.hex("130E1F")
              ],
              tl: /* [] */0
            }
          }
        }
      }
    });

var Colors = {
  toBsHex: toBsHex,
  black: black$1,
  purple: purple$1,
  pink: pink$1,
  shape01: shape01$1,
  shape02: shape02$1,
  white: white,
  gray1: gray1$1,
  text: text,
  gradient: gradient,
  darkGradient: darkGradient
};

var maxWidth = CssJs.px(1200);

var clipBackground = [
  CssJs.unsafe("background-clip", "text"),
  CssJs.unsafe("-webkit-background-clip", "text"),
  CssJs.unsafe("-webkit-text-fill-color", "transparent")
];

var Constants = {
  maxWidth: maxWidth,
  clipBackground: clipBackground
};

var ZIndex = {
  aboveAll: 100,
  above: 50,
  base: 10,
  hidden: -1
};

var xs = CssJs.rem(0.8);

var sm = CssJs.rem(1.2);

var md = CssJs.rem(1.6);

var lg = CssJs.rem(2.4);

var xlg = CssJs.rem(3.2);

var Spacing = {
  xs: xs,
  sm: sm,
  md: md,
  lg: lg,
  xlg: xlg
};

var xs$1 = CssJs.rem(0.6);

var sm$1 = CssJs.rem(1.2);

var md$1 = CssJs.rem(1.6);

var Radius = {
  xs: xs$1,
  sm: sm$1,
  md: md$1
};

var fontFamily = "'Poppins', sans-serif";

exports.ColorsRaw = ColorsRaw;
exports.Colors = Colors;
exports.Constants = Constants;
exports.ZIndex = ZIndex;
exports.Spacing = Spacing;
exports.Radius = Radius;
exports.fontFamily = fontFamily;
/* black Not a pure module */
