open Render

module Styles = {
  open CssJs

  let wrapper = style(. [
    display(#flex),
    justifyContent(#spaceBetween),
    alignItems(#center),
    Media.xs([
      padding2(~v=zero, ~h=3.2->rem),
      margin4(~top=17.2->rem, ~bottom=zero, ~left=auto, ~right=auto),
      flexDirection(#column),
    ]),
    Media.sm([
      margin4(~top=22.4->rem, ~bottom=zero, ~left=auto, ~right=auto),
      padding2(~v=zero, ~h=4.6->rem),
      flexDirection(#column),
    ]),
    Media.md([
      maxWidth(Theme.Constants.maxWidth),
      margin4(~top=23.4->rem, ~bottom=0.0->rem, ~left=auto, ~right=auto),
      padding2(~v=zero, ~h=4.6->rem),
      flexDirection(#column),
    ]),
    Media.xl([padding2(~v=zero, ~h=5.6->rem), flexDirection(#row)]),
    Media.xxl([padding2(~v=zero, ~h=zero)]),
  ])

  let textWrapper = style(. [
    Media.xs([marginBottom(5.6->rem)]),
    Media.sm([marginBottom(5.6->rem)]),
    Media.md([flexBasis(50.0->pct)]),
  ])

  let card = style(. [
    borderRadius(5->px),
    padding(4.0->rem),
    width(41.6->rem),
    display(#flex),
    flexDirection(#column),
    alignItems(#center),
    background(Theme.Colors.darkGradient),
  ])

  let price = style(. [
    margin(zero),
    fontSize(4.8->rem),
    fontWeight(#bold),
    color(Theme.Colors.white),
    fontFamily(Theme.fontFamily->#custom),
  ])

  let divider = style(. [
    height(1->px),
    width(100.0->pct),
    margin2(~v=2.4->rem, ~h=zero),
    backgroundColor(#hex("2E1829")),
  ])

  let items = style(. [
    alignSelf(#center),
    margin(zero),
    padding(zero),
    listStyleType(#none),
    display(#flex),
    flexDirection(#column),
    selector(
      "> li",
      [
        display(#flex),
        alignItems(#center),
        fontFamily(Theme.fontFamily->#custom),
        color(Theme.Colors.white),
        fontSize(1.8->rem),
        marginBottom(1.6->rem),
        selector("> img", [display(block), marginRight(1.6->rem)]),
      ],
    ),
  ])

  let button = style(. [
    //
    cursor(pointer),
    marginTop(2.4->rem),
    padding2(~v=1.2->rem, ~h=zero),
    borderStyle(#none),
    outlineStyle(#none),
    backgroundColor(Theme.Colors.purple),
    color(Theme.Colors.white),
    borderRadius(6->px),
    width(100.0->pct),
    fontSize(1.8->rem),
    fontFamily(Theme.fontFamily->#custom),
    transition(~duration=300, "background"),
    hover([
      transition(~duration=300, "background"),
      background(Polished.Color.darken(Theme.ColorsRaw.purple, ~amount=0.05)->Theme.Colors.toBsHex),
    ]),
  ])
}

let items = [
  `Acesso vitalício`,
  `Acesso ao discord`,
  `Suporte dos instrutores`,
  `Lives exclusivas`,
]

@react.component
let make = () => {
  <div className=Styles.wrapper>
    <div className=Styles.textWrapper>
      <Title icon=#lighting> {`Garanta sua vaga!`} </Title>
      <Text.P>
        {`Este será um curso vivo, onde os módulos serão lançados conforme o desenvolvimento. 
          Agora você já pode garantir a sua vaga no curso, 
          pois já temos 2 módulos disponíveis para você começar a aprender rescript! Algum textinho aqui falando 
          sobre o curso etc etc.
        `->str}
      </Text.P>
    </div>
    <div className=Styles.card>
      <p className=Styles.price> {`R$ 350,00`->str} </p>
      <div className=Styles.divider />
      <ul className=Styles.items>
        {items->map((item, key) => {
          <li key={key->Js.Int.toString}> <img src="assets/check-icon.svg" /> {item->str} </li>
        })}
      </ul>
      <button className=Styles.button> {`Garantir minha vaga`->str} </button>
    </div>
  </div>
}