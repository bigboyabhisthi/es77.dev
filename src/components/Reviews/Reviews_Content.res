open Render

type review = {
  name: string,
  role: string,
  photo: string,
  description: React.element,
  translatedDescription: option<React.element>,
}

module TextWrapper = {
  @react.component
  let make = (~children) => <> {`\u00a0 \u00a0 \u00a0 \u00a0`->str} children </>
}

let highlights = [
  {
    name: "Fernando Daciuk",
    role: "Tech Lead na Brainn Co.",
    photo: "assets/reviews/daciuk.webp",
    description: {
      <TextWrapper>
        {j`Tive o prazer de trabalhar com o Marcos em projetos recentes, e é impossível não ver o brilho nos olhos quando ele está falando de Programação Funcional, JavaScript, React e Rescript. Esse curso é a sua`->str}
        <Text.Span> {j` oportunidade de aprender de verdade `} </Text.Span>
        {j`com quem entende do assunto 😄`->str}
      </TextWrapper>
    },
    translatedDescription: None,
  },
  {
    name: "Guilherme Decampo",
    role: "CEO na Astrocoders",
    photo: "assets/reviews/guilherme.webp",
    description: {
      <TextWrapper>
        {j`Nos últimos anos, o Gabriel tem liderado a adoção de ReScript na Astrocoders. Sem dúvidas, hoje ele é uma das principais referências que mais domina e conhece ReScript no Brasil. Tenho certeza que se você quer aprender ReScript, este é o `->str}
        <Text.Span> {j`melhor material de aprendizado disponível no mercado `} </Text.Span>
        {`🚀`->str}
      </TextWrapper>
    },
    translatedDescription: None,
  },
  {
    name: "Gabriel Nordeborn",
    role: "Partner na Arizon Consulting",
    photo: "assets/reviews/zth.webp",
    description: {
      <TextWrapper>
        {j`Gabriel does not merely have a fantastic first name (😂), he’s also an integral part of the ReScript community, having built `->str}
        <Text.Span> {j`excellent libraries like ReForm, lenses-ppx and more`} </Text.Span>
        {j`. Having Gabriel by your side on your ReScript journey `->str}
        <Text.Span> {j`means you’re in excellent hands!`} </Text.Span>
      </TextWrapper>
    },
    translatedDescription: {
      Some(
        <TextWrapper>
          {j`Gabriel não tem apenas um nome incrível (😂), ele também é parte integrante da comunidade ReScript, tendo construído `->str}
          <Text.Span> {j`bibliotecas excelentes como ReForm, lenses-ppx e muito mais`} </Text.Span>
          {j`. Ter Gabriel ao seu lado em sua jornada ReScript `->str}
          <Text.Span> {j`significa que você está em excelentes mãos!`} </Text.Span>
        </TextWrapper>,
      )
    },
  },
  {
    name: "Vitor Mendrone",
    role: "Head of Engineering na Portolab",
    photo: "assets/reviews/mendrone.webp",
    description: {
      <TextWrapper>
        {j`Além de ser um dos desenvolvedores mais brilhantes com quem já trabalhei, posso dizer que o conhecimento do Marcos em `->str}
        <Text.Span> {j`ReScript`} </Text.Span>
        {j` e `->str}
        <Text.Span> {j`Programação Funcional`} </Text.Span>
        {j` como um todo é impressionante, muito acima da média e`->str}
        <Text.Span>
          {j` caminha de mãos dadas com a boa didática que ele desenvolveu sendo um evangelizador informal da linguagem. `}
        </Text.Span>
      </TextWrapper>
    },
    translatedDescription: None,
  },
]

let studentReviews = [
  {
    name: j`João Miguel`,
    role: "Developer na Lukin",
    photo: "assets/reviews/daciuk.webp",
    description: {
      <TextWrapper>
        {j`O curso foi incrível! Não encontrei nenhum curso que ensinasse tão bem `->str}
        <span> {j`programação funcional de uma maneira prática e descomplicada`->str} </span>
        {j`. Certamente a próxima versão será ainda melhor que a primeira!`->str}
      </TextWrapper>
    },
    translatedDescription: None,
  },
  {
    name: j`João Miguel`,
    role: "Developer na Lukin",
    photo: "assets/reviews/daciuk.webp",
    description: {
      <TextWrapper>
        {j`O curso foi incrível! Não encontrei nenhum curso que ensinasse tão bem `->str}
        <span> {j`programação funcional de uma maneira prática e descomplicada`->str} </span>
        {j`. Certamente a próxima versão será ainda melhor que a primeira!`->str}
      </TextWrapper>
    },
    translatedDescription: None,
  },
  {
    name: j`João Miguel`,
    role: "Developer na Lukin",
    photo: "assets/reviews/daciuk.webp",
    description: {
      <TextWrapper>
        {j`O curso foi incrível! Não encontrei nenhum curso que ensinasse tão bem `->str}
        <span> {j`programação funcional de uma maneira prática e descomplicada`->str} </span>
        {j`. Certamente a próxima versão será ainda melhor que a primeira!`->str}
      </TextWrapper>
    },
    translatedDescription: None,
  },
  {
    name: j`João Miguel`,
    role: "Developer na Lukin",
    photo: "assets/reviews/daciuk.webp",
    description: {
      <TextWrapper>
        {j`O curso foi incrível! Não encontrei nenhum curso que ensinasse tão bem `->str}
        <span> {j`programação funcional de uma maneira prática e descomplicada`->str} </span>
        {j`. Certamente a próxima versão será ainda melhor que a primeira!`->str}
      </TextWrapper>
    },
    translatedDescription: None,
  },
]
