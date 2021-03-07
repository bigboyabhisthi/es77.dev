// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FramerMotion = require("framer-motion");
var AboutRescript_Texts = require("./AboutRescript_Texts.bs.js");
var AboutReScript_Styles = require("./AboutReScript_Styles.bs.js");
var AboutRescript_Snippet = require("./AboutRescript_Snippet.bs.js");
var ReactIntersectionObserver = require("react-intersection-observer");

var variants_hidden = {
  opacity: 0.0,
  y: 20
};

var variants_visible = {
  opacity: 1.0,
  y: 0,
  transition: {
    duration: 0.6,
    delay: 0.35
  }
};

var variants = {
  hidden: variants_hidden,
  visible: variants_visible
};

function AboutReScript(Props) {
  var match = ReactIntersectionObserver.useInView();
  var inView = match[1];
  var match$1 = React.useState(function () {
        return false;
      });
  var setShowSnippets = match$1[1];
  var controls = FramerMotion.useAnimation();
  React.useEffect((function () {
          if (inView) {
            controls.start("visible");
            Curry._1(setShowSnippets, (function (param) {
                    return true;
                  }));
          }
          
        }), [inView]);
  return React.createElement("section", {
              ref: match[0],
              className: AboutReScript_Styles.wrapper,
              id: "o-que-e-rescript"
            }, React.createElement(AboutRescript_Snippet.make, {
                  showSnippets: match$1[0],
                  controls: controls
                }), React.createElement("div", {
                  className: AboutReScript_Styles.content
                }, React.createElement(AboutRescript_Texts.make, {
                      controls: controls
                    })));
}

var SnippetExample;

var Texts;

var make = AboutReScript;

exports.SnippetExample = SnippetExample;
exports.Texts = Texts;
exports.variants = variants;
exports.make = make;
/* react Not a pure module */
