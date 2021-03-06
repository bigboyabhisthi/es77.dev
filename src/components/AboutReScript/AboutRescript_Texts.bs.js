// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Text = require("../Text/Text.bs.js");
var Title = require("../Title/Title.bs.js");
var React = require("react");
var AboutReScript_Styles = require("./AboutReScript_Styles.bs.js");

function AboutRescript_Texts(Props) {
  return React.createElement("div", undefined, React.createElement(Title.make, {
                  children: "O que é ReScript?"
                }), React.createElement("p", {
                  className: AboutReScript_Styles.text
                }, React.createElement($$Text.make, {
                      children: "ReScript"
                    }), React.createElement($$Text.Span.make, {
                      children: " (anteriormente ReasonML) "
                    }), React.createElement($$Text.make, {
                      children: "é uma linguagem focada em React \n          e no ecossistema JavaScropt. Criada dentro do Facebook, a linguagem tem \n          como objetivo trazer uma síntaxe amigável aos desenvolvedores(as) JavaScript, \n          com um poderoso sistema de tipos e diversas features de programação funcional."
                    })), React.createElement("p", {
                  className: AboutReScript_Styles.text
                }, "Por compartilhar do mesmo criador do React, ReScript possui \n        diversas features pensadas do zero para integração com o mesmo, \n        contando inclusive com um ótimo suporte a JSX nativo no seu compilador."), React.createElement("p", {
                  className: AboutReScript_Styles.text
                }, "\n        Além disso, a linguagem foi pensada desde o início em interoperar com \n        códigos e bibliotecas escritas em JavaScript. O que significa, que \n        qualquer biblioteca JavaScript, pode ser utilizada com ReScript. \n      "));
}

var make = AboutRescript_Texts;

exports.make = make;
/* Text Not a pure module */