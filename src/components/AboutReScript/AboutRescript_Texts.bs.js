// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var Title = require("../Title/Title.bs.js");
var React = require("react");
var Motion = require("../../bindings/FramerMotion/Motion.bs.js");
var AboutReScript_Styles = require("./AboutReScript_Styles.bs.js");

function variants(delay) {
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
              delay: delay * 0.1
            }
          }
        };
}

function AboutRescript_Texts(Props) {
  var controls = Props.controls;
  var animate = {
    NAME: "controlled",
    VAL: controls
  };
  return React.createElement("div", undefined, React.createElement(Title.make, {
                  children: "O que é ReScript?",
                  animate: animate,
                  initial: "hidden",
                  variants: variants(1.0)
                }), React.createElement(Motion.P.make, {
                  className: AboutReScript_Styles.text,
                  initial: "hidden",
                  variants: variants(3.0),
                  animate: animate,
                  children: null
                }, React.createElement($$Text.make, {
                      children: "ReScript"
                    }), React.createElement($$Text.Span.make, {
                      children: " (anteriormente ReasonML) "
                    }), React.createElement($$Text.make, {
                      children: "é uma linguagem focada em React \n          e no ecossistema JavaScropt. Criada dentro do Facebook, a linguagem tem \n          como objetivo trazer uma síntaxe amigável aos desenvolvedores(as) JavaScript, \n          com um poderoso sistema de tipos e diversas features de programação funcional."
                    })), React.createElement(Motion.P.make, {
                  className: AboutReScript_Styles.text,
                  initial: "hidden",
                  variants: variants(6.0),
                  animate: animate,
                  children: "Por compartilhar do mesmo criador do React, ReScript possui \n        diversas features pensadas do zero para integração com o mesmo, \n        contando inclusive com um ótimo suporte a JSX nativo no seu compilador."
                }), React.createElement(Motion.P.make, {
                  className: AboutReScript_Styles.text,
                  initial: "hidden",
                  variants: variants(9.0),
                  animate: animate,
                  children: "\n        Além disso, a linguagem foi pensada desde o início em interoperar com \n        códigos e bibliotecas escritas em JavaScript. O que significa, que \n        qualquer biblioteca JavaScript, pode ser utilizada com ReScript. \n      "
                }));
}

var make = AboutRescript_Texts;

exports.variants = variants;
exports.make = make;
/* Text Not a pure module */
