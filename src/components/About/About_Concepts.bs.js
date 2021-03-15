// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var React = require("react");
var Motion = require("../../bindings/FramerMotion/Motion.bs.js");
var Render = require("../../lib/Render.bs.js");
var About_Styles = require("./About_Styles.bs.js");
var FramerMotion = require("framer-motion");
var ReactIntersectionObserver = require("react-intersection-observer");

function toFloat(prim) {
  return prim;
}

var concepts = [
  "Filosofia e conceitos da linguagem",
  "Setup e Tooling de projetos",
  "Type Driven Development",
  "Interoperabilidade com JavaScript",
  "Integrações REST e GraphQL",
  "CSS in ReScript",
  "Integração com React",
  "Programação Funcional"
];

function variants(index) {
  return {
          hidden: {
            opacity: 0.0,
            y: 20
          },
          visible: {
            opacity: 1.0,
            y: 0,
            transition: {
              duration: 0.6,
              delay: index * 0.2
            }
          }
        };
}

function About_Concepts(Props) {
  var controls = FramerMotion.useAnimation();
  var match = ReactIntersectionObserver.useInView();
  var inView = match[1];
  React.useEffect((function () {
          if (inView) {
            controls.start("visible");
          }
          
        }), [inView]);
  return React.createElement("div", {
              ref: match[0],
              className: About_Styles.conceptsWrapper
            }, React.createElement(Motion.P.make, {
                  className: About_Styles.conceptsText,
                  initial: "hidden",
                  variants: variants(1),
                  animate: {
                    NAME: "controlled",
                    VAL: controls
                  },
                  children: null
                }, React.createElement($$Text.make, {
                      children: "Você irá aprender de forma "
                    }), React.createElement($$Text.Span.make, {
                      children: "prática"
                    }), React.createElement($$Text.make, {
                      children: " e"
                    }), React.createElement($$Text.Span.make, {
                      children: " descomplicada"
                    }), React.createElement($$Text.make, {
                      children: ", diversos conceitos relacionados a programação funcional e como aplicá-los no seu dia a dia."
                    })), React.createElement("ul", {
                  className: About_Styles.topicsList
                }, Render.map(concepts, (function (text, index) {
                        return React.createElement(Motion.Li.make, {
                                    initial: "hidden",
                                    variants: variants(index),
                                    animate: {
                                      NAME: "controlled",
                                      VAL: controls
                                    },
                                    children: text,
                                    key: Render.toString(index)
                                  });
                      }))));
}

var make = About_Concepts;

exports.toFloat = toFloat;
exports.concepts = concepts;
exports.variants = variants;
exports.make = make;
/* Text Not a pure module */