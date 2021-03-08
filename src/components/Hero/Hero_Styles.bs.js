// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");
var Theme = require("../../lib/Theme.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

var wrapper = CssJs.style([
      CssJs.maxWidth(Theme.Constants.maxWidth),
      CssJs.display("flex"),
      CssJs.flexDirection(CssJs.column),
      CssJs.alignItems(CssJs.center),
      CssJs.justifyContent(CssJs.center),
      CssJs.paddingBottom(CssJs.rem(10.0)),
      CssJs.margin4(CssJs.rem(7.2), CssJs.auto, CssJs.rem(32.4), CssJs.auto)
    ]);

var symbolWrapper = CssJs.style([CssJs.width(CssJs.rem(35.0))]);

var text = CssJs.style([
      CssJs.color(Theme.Colors.white),
      CssJs.fontFamily({
            NAME: "custom",
            VAL: Theme.fontFamily
          }),
      CssJs.fontSize(CssJs.rem(6.0)),
      CssJs.textAlign("center"),
      CssJs.maxWidth(CssJs.px(1000)),
      CssJs.position(CssJs.relative),
      CssJs.top(CssJs.px(-100)),
      CssJs.selector("> span", Belt_Array.concat([CssJs.background(Theme.Colors.gradient)], Theme.Constants.clipBackground))
    ]);

var arrowAnimation = CssJs.keyframes([
      [
        0,
        [CssJs.transform(CssJs.translateY(CssJs.px(5)))]
      ],
      [
        50,
        [CssJs.transform(CssJs.translateY(CssJs.zero))]
      ],
      [
        100,
        [CssJs.transform(CssJs.translateY(CssJs.px(5)))]
      ]
    ]);

var button = CssJs.style(Belt_Array.concat([
          CssJs.padding(CssJs.zero),
          CssJs.margin(CssJs.zero),
          CssJs.outlineStyle(CssJs.none),
          CssJs.borderStyle(CssJs.none),
          CssJs.background(Theme.Colors.gradient),
          CssJs.fontFamily({
                NAME: "custom",
                VAL: Theme.fontFamily
              }),
          CssJs.fontSize(CssJs.rem(1.8)),
          CssJs.fontWeight({
                NAME: "num",
                VAL: 600
              }),
          CssJs.position(CssJs.relative),
          CssJs.cursor(CssJs.pointer),
          CssJs.top(CssJs.px(-50)),
          CssJs.textDecoration(CssJs.none),
          CssJs.after([
                CssJs.contentRule({
                      NAME: "url",
                      VAL: "assets/arrow-down.svg"
                    }),
                CssJs.position(CssJs.absolute),
                CssJs.bottom(CssJs.rem(-0.5)),
                CssJs.width(CssJs.rem(2.0)),
                CssJs.height(CssJs.rem(1.0)),
                CssJs.left(CssJs.pct(50.0)),
                CssJs.marginLeft(CssJs.rem(-1.0)),
                CssJs.animation(1000, undefined, undefined, undefined, undefined, undefined, "infinite", arrowAnimation)
              ])
        ], Theme.Constants.clipBackground));

var $$Array;

exports.$$Array = $$Array;
exports.wrapper = wrapper;
exports.symbolWrapper = symbolWrapper;
exports.text = text;
exports.arrowAnimation = arrowAnimation;
exports.button = button;
/* wrapper Not a pure module */
