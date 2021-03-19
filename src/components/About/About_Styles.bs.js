// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var CssJs = require("bs-css-emotion/src/CssJs.bs.js");
var Media = require("../../lib/Media.bs.js");
var Theme = require("../../lib/Theme.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

var wrapper = CssJs.style([
      Media.xs([
            CssJs.padding2(CssJs.zero, CssJs.rem(3.2)),
            CssJs.margin4(CssJs.rem(17.2), CssJs.auto, CssJs.zero, CssJs.auto)
          ]),
      Media.sm([
            CssJs.margin4(CssJs.rem(22.4), CssJs.auto, CssJs.zero, CssJs.auto),
            CssJs.padding2(CssJs.zero, CssJs.rem(4.6))
          ]),
      Media.md([
            CssJs.maxWidth(Theme.Constants.maxWidth),
            CssJs.margin4(CssJs.rem(23.4), CssJs.auto, CssJs.rem(0.0), CssJs.auto),
            CssJs.padding2(CssJs.zero, CssJs.rem(4.6))
          ]),
      Media.xl([CssJs.padding2(CssJs.zero, CssJs.rem(5.6))]),
      Media.xxl([CssJs.padding2(CssJs.zero, CssJs.zero)])
    ]);

var conceptsWrapper = CssJs.style([
      CssJs.display("flex"),
      CssJs.justifyContent(CssJs.spaceBetween),
      CssJs.marginTop(CssJs.rem(6.4)),
      Media.xs([
            CssJs.flexDirection("column"),
            CssJs.alignItems("flexStart")
          ]),
      Media.sm([
            CssJs.flexDirection("column"),
            CssJs.alignItems("flexStart")
          ]),
      Media.lg([
            CssJs.flexDirection("row"),
            CssJs.alignItems(CssJs.center)
          ])
    ]);

var conceptsText = CssJs.style([
      CssJs.color(Theme.Colors.white),
      CssJs.fontFamily({
            NAME: "custom",
            VAL: Theme.fontFamily
          }),
      CssJs.fontWeight({
            NAME: "num",
            VAL: 800
          }),
      Media.xs([
            CssJs.fontSize(CssJs.rem(2.2)),
            CssJs.marginBottom(CssJs.rem(5.6))
          ]),
      Media.sm([
            CssJs.fontSize(CssJs.rem(3.2)),
            CssJs.marginBottom(CssJs.rem(5.2))
          ]),
      Media.lg([CssJs.marginRight(CssJs.rem(6.4))]),
      CssJs.selector("> span", Belt_Array.concat([CssJs.background(Theme.Colors.gradient)], Theme.Constants.clipBackground))
    ]);

var topicsList = CssJs.style([
      CssJs.minWidth(CssJs.rem(42.0)),
      CssJs.listStyleType(CssJs.none),
      CssJs.padding(CssJs.zero),
      CssJs.margin(CssJs.zero),
      Media.xs([CssJs.minWidth(CssJs.pct(100.0))]),
      CssJs.selector("> li", [
            CssJs.paddingLeft(CssJs.rem(4.0)),
            CssJs.marginBottom(CssJs.rem(1.2)),
            CssJs.color(Theme.Colors.text),
            CssJs.fontFamily({
                  NAME: "custom",
                  VAL: Theme.fontFamily
                }),
            CssJs.fontWeight({
                  NAME: "num",
                  VAL: 600
                }),
            CssJs.fontSize(CssJs.rem(1.8)),
            Media.xs([CssJs.fontSize(CssJs.rem(1.6))]),
            Media.sm([CssJs.fontSize(CssJs.rem(2.0))]),
            Media.xs([CssJs.fontSize(CssJs.rem(1.8))]),
            CssJs.position(CssJs.relative),
            CssJs.after([
                  CssJs.contentRule({
                        NAME: "url",
                        VAL: "assets/check-icon.svg"
                      }),
                  Media.sm([]),
                  CssJs.width(CssJs.rem(2.4)),
                  CssJs.height(CssJs.rem(2.4)),
                  CssJs.position(CssJs.absolute),
                  CssJs.left(CssJs.zero),
                  CssJs.top(CssJs.pct(50.0)),
                  CssJs.marginTop(CssJs.rem(-1.2))
                ])
          ])
    ]);

var $$Array;

exports.$$Array = $$Array;
exports.wrapper = wrapper;
exports.conceptsWrapper = conceptsWrapper;
exports.conceptsText = conceptsText;
exports.topicsList = topicsList;
/* wrapper Not a pure module */
