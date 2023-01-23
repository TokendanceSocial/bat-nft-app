export function pinSpacer() {
  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.fromTo(
    "section.panel.pin-1",
    1,
    { xPercent: 100 },
    { xPercent: 0, ease: Linear.easeNone },
    "+=1"
  );
  tl.fromTo(
    "section.panel.pin-2",
    1,
    { yPercent: 100 },
    { yPercent: 0, ease: Linear.easeNone },
    "+=1"
  );

  new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin("#pinMaster")
    .setTween(tl)
    .addTo(controller);

}
