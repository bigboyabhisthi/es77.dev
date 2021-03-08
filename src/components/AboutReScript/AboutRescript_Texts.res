let variants = delay => {
  open FramerMotion
  {
    hidden: variant(~opacity=0.0, ~y=20, ()),
    visible: variant(
      ~opacity=1.0,
      ~y=0,
      ~transition=transition(~delay=delay *. 0.1, ~duration=0.6, ()),
      (),
    ),
  }
}

@react.component
let make = (~controls) => {
  let animate = #controlled(controls)
  <div>
    <Title initial=#hidden animate variants={variants(1.0)}> {j`O que é ReScript?`} </Title>
    <Text.P initial=#hidden animate variants={variants(3.0)}>
      <Text> "ReScript" </Text>
      <Text.Span> " (anteriormente ReasonML) " </Text.Span>
      <Text>
        {j`é uma linguagem focada em React 
          e no ecossistema JavaScropt. Criada dentro do Facebook, a linguagem tem 
          como objetivo trazer uma síntaxe amigável aos desenvolvedores(as) JavaScript, 
          com um poderoso sistema de tipos e diversas features de programação funcional.`}
      </Text>
    </Text.P>
    <Text.P initial=#hidden animate variants={variants(6.0)}>
      {j`Por compartilhar do mesmo criador do React, ReScript possui 
        diversas features pensadas do zero para integração com o mesmo, 
        contando inclusive com um ótimo suporte a JSX nativo no seu compilador.`->React.string}
    </Text.P>
    <Text.P initial=#hidden animate variants={variants(9.0)}>
      {j`
        Além disso, a linguagem foi pensada desde o início em interoperar com 
        códigos e bibliotecas escritas em JavaScript. O que significa, que 
        qualquer biblioteca JavaScript, pode ser utilizada com ReScript. 
      `->React.string}
    </Text.P>
  </div>
}
