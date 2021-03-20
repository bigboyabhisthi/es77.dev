// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Title = require("../Title/Title.bs.js");
var React = require("react");
var AboutUs_Card = require("./AboutUs_Card.bs.js");
var FramerMotion = require("framer-motion");
var AboutUs_Styles = require("./AboutUs_Styles.bs.js");
var ReactIntersectionObserver = require("react-intersection-observer");

var titleVariants_hidden = {
  opacity: 0.0,
  y: 20
};

var titleVariants_visible = {
  opacity: 1.0,
  y: 0,
  transition: {
    duration: 0.6,
    delay: 0.35
  }
};

var titleVariants = {
  hidden: titleVariants_hidden,
  visible: titleVariants_visible
};

function makeTelegramUrl(username) {
  return "https://t.me/" + username + "?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20curso%20ES2077";
}

function AboutUs(Props) {
  var match = ReactIntersectionObserver.useInView();
  var inView = match[1];
  var controls = FramerMotion.useAnimation();
  React.useEffect((function () {
          if (inView) {
            controls.start("visible");
          }
          
        }), [inView]);
  return React.createElement(React.Fragment, undefined, React.createElement("img", {
                  className: AboutUs_Styles.triangle,
                  src: "assets/triangle-2.svg"
                }), React.createElement("div", {
                  className: AboutUs_Styles.wrapper,
                  id: "#instrutores"
                }, React.createElement(Title.make, {
                      children: "Sobre os instrutores",
                      innerRef: match[0],
                      animate: {
                        NAME: "controlled",
                        VAL: controls
                      },
                      initial: "hidden",
                      variants: titleVariants
                    }), React.createElement("div", {
                      className: AboutUs_Styles.cardsContainer
                    }, React.createElement(AboutUs_Card.make, {
                          name: "Marcos Oliveira",
                          description: "CTO na Astrocoders, desenvolvedor para toda obra, professor e evangelista de ReScript e Programação Funcional. Já palestra e produz conteúdo sobre Reason e ReScript há mais de 3 anos e é autor de inúmeras biblitotecas como ReForm e ReasonApolloHooks.",
                          role: "Developer na Brainn Co.",
                          photo: "/assets/marcos.webp",
                          github: "https://github.com/vmarcosp",
                          telegram: "https://t.me/" + "vmarcosp" + "?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20curso%20ES2077",
                          twitter: "https://github.com/vmaarcosp",
                          initialX: -40
                        }), React.createElement(AboutUs_Card.make, {
                          name: "Gabriel Rubens",
                          description: "CTO na Astrocoders, desenvolvedor para toda obra, professor e evangelista de ReScript e Programação Funcional. Já palestra e produz conteúdo sobre Reason e ReScript há mais de 3 anos e é autor de inúmeras biblitotecas como ReForm e ReasonApolloHooks.",
                          role: "CTO na Astrocoders",
                          photo: "/assets/gabriel.webp",
                          github: "https://github.com/fakenickels",
                          telegram: "https://t.me/" + "fakenickels" + "?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20curso%20ES2077",
                          twitter: "https://github.com/fakenickels",
                          initialX: 40
                        }))));
}

var Card;

var make = AboutUs;

exports.Card = Card;
exports.titleVariants = titleVariants;
exports.makeTelegramUrl = makeTelegramUrl;
exports.make = make;
/* Title Not a pure module */
