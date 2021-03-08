// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Motion = require("../../bindings/FramerMotion/Motion.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Text_Styles = require("./Text_Styles.bs.js");

function $$Text(Props) {
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, children);
}

function Text$Span(Props) {
  var children = Props.children;
  var className = Props.className;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = Caml_option.valFromOption(className);
  }
  return React.createElement("span", tmp, children);
}

var Span = {
  make: Text$Span
};

function Text$P(Props) {
  var children = Props.children;
  var animate = Props.animate;
  var initial = Props.initial;
  var variants = Props.variants;
  var tmp = {
    className: Text_Styles.paragraph,
    children: children
  };
  if (initial !== undefined) {
    tmp.initial = Caml_option.valFromOption(initial);
  }
  if (variants !== undefined) {
    tmp.variants = Caml_option.valFromOption(variants);
  }
  if (animate !== undefined) {
    tmp.animate = Caml_option.valFromOption(animate);
  }
  return React.createElement(Motion.P.make, tmp);
}

var P = {
  make: Text$P
};

var Styles;

var make = $$Text;

exports.Styles = Styles;
exports.make = make;
exports.Span = Span;
exports.P = P;
/* react Not a pure module */
