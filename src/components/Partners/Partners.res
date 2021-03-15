open Partners_Styles

module Logos = Partners_Logo

let variants = delay => {
  open FramerMotion
  {
    hidden: variant(~opacity=0.0, ~y=20, ()),
    visible: variant(~opacity=1.0, ~y=0, ~transition=transition(~delay, ~duration=0.6, ()), ()),
  }
}

@react.component
let make = () => {
  let (innerRef, inView) = IntersectionObserver.useInView()
  let (partnersRef, partnersInView) = IntersectionObserver.useInView()
  let titleControls = FramerMotion.useAnimation()
  let partnerControls = FramerMotion.useAnimation()

  React.useEffect2(() => {
    if inView {
      titleControls.start(. #visible)
    }
    if partnersInView {
      partnerControls.start(. #visible)
    }

    None
  }, (inView, partnersInView))

  <div className=wrapper>
    <Title innerRef animate=#controlled(titleControls) variants={variants(0.2)} initial=#hidden>
      "Nossos parceiros"
    </Title>
    <div className=partners ref=partnersRef>
      <Motion.Div
        initial=#hidden
        animate=#controlled(partnerControls)
        variants={variants(0.4)}
        className=partner>
        <Logos.Brainn /> <p> {`Brainn Co.`->React.string} </p>
      </Motion.Div>
      <Motion.Div
        initial=#hidden
        animate=#controlled(partnerControls)
        variants={variants(0.6)}
        className=partner>
        <Logos.ReasonBR /> <p> {`ReasonBR`->React.string} </p>
      </Motion.Div>
      <Motion.Div
        initial=#hidden
        animate=#controlled(partnerControls)
        variants={variants(0.8)}
        className=partner>
        <Logos.Brainn /> <p> {`Brainn Co.`->React.string} </p>
      </Motion.Div>
    </div>
  </div>
}