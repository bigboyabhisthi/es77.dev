open AboutReScript_Styles

module SnippetExample = AboutRescript_Snippet
module Texts = AboutRescript_Texts

let variants = {
  open FramerMotion
  {
    hidden: variant(~opacity=0.0, ~y=20, ()),
    visible: variant(
      ~opacity=1.0,
      ~y=0,
      ~transition=transition(~delay=0.35, ~duration=0.6, ()),
      (),
    ),
  }
}

@react.component
let make = () => {
  let (containerRef, inView) = IntersectionObserver.useInView()
  let (showSnippets, setShowSnippets) = React.useState(_ => false)
  let controls = FramerMotion.useAnimation()

  React.useEffect1(() => {
    if inView {
      controls.start(. #visible)
      setShowSnippets(_ => true)
    }

    None
  }, [inView])

  <section id="o-que-e-rescript" ref=containerRef className=wrapper>
    <SnippetExample showSnippets controls /> <div className=content> <Texts controls /> </div>
  </section>
}
