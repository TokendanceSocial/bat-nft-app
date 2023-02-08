export function pinSpacer() {
  // @ts-ignore
  var controller = new ScrollMagic.Controller();
  // @ts-ignore
  var tl = new TimelineMax();
  tl.fromTo(
    "section.panel.pin-1",
    1,
    { xPercent: 100 },
    // @ts-ignore
    { xPercent: 0, ease: Linear.easeNone },
    "+=1"
  );
  tl.fromTo(
    "section.panel.pin-2",
    1,
    { yPercent: 100 },
    // @ts-ignore
    { yPercent: 0, ease: Linear.easeNone },
    "+=1"
  );

  // @ts-ignore
  new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin("#pinMaster")
    .setTween(tl)
    .addTo(controller);

}
