// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");
var Theme = require("../../lib/Theme.bs.js");

var paragraph = CssJs.style([
      CssJs.color(Theme.Colors.text),
      CssJs.fontFamily({
            NAME: "custom",
            VAL: Theme.fontFamily
          }),
      CssJs.fontSize(CssJs.rem(1.8)),
      CssJs.transition(400, undefined, undefined, "color"),
      CssJs.hover([
            CssJs.color(Theme.Colors.white),
            CssJs.transition(400, undefined, undefined, "color")
          ])
    ]);

exports.paragraph = paragraph;
/* paragraph Not a pure module */
