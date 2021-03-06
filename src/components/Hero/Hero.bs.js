// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var React = require("react");
var Animated = require("../../lib/Animated/Animated.bs.js");
var Animated$1 = require("./Animated");
var Hero_Styles = require("./Hero_Styles.bs.js");

var make = Animated$1.Symbol;

var $$Symbol = {
  make: make
};

function Hero(Props) {
  return React.createElement("div", {
              className: Hero_Styles.wrapper
            }, React.createElement("div", {
                  className: Hero_Styles.symbolWrapper
                }, React.createElement(make, {})), React.createElement(Animated.FadeIn.make, {
                  children: React.createElement("h1", {
                        className: Hero_Styles.text
                      }, React.createElement($$Text.make, {
                            children: "Aprenda uma linguagem"
                          }), React.createElement($$Text.Span.make, {
                            children: " funcional "
                          }), React.createElement($$Text.make, {
                            children: "e focada em "
                          }), React.createElement($$Text.Span.make, {
                            children: "React"
                          })),
                  y: [
                    0,
                    -20
                  ],
                  delay: 1.75,
                  duration: 0.6
                }), React.createElement(Animated.FadeIn.make, {
                  children: React.createElement("a", {
                        className: Hero_Styles.button,
                        href: "#o-que-e-rescript"
                      }, "SAIBA MAIS"),
                  y: [
                    0,
                    -20
                  ],
                  delay: 2.0,
                  duration: 0.6
                }));
}

var Styles;

var make$1 = Hero;

exports.Styles = Styles;
exports.$$Symbol = $$Symbol;
exports.make = make$1;
/* make Not a pure module */
