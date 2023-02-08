export function slider() {
  // @ts-ignore
  TweenLite.defaultEase = Linear.easeNone;
  var titles = document.querySelectorAll(".sectionTitle");
  // @ts-ignore
  var controller = new ScrollMagic.Controller();
  // @ts-ignore
  var tl = new TimelineMax();

  // create timeline
  // this could also be created in a loop
  titles.forEach((element, index) => {
    if (index === 0) return;
    tl.to("#js-slideContainer", 1, { xPercent: -20 * index }, `label${index}`);
    tl.from(titles[index], 0.5, { opacity: 0 }, `label${index}+=0.5`);
  })
  // tl.to("#js-slideContainer", 1, { xPercent: -20 }, "label1");
  // tl.from(titles[1], 0.5, { opacity: 0 }, "label1+=0.5");
  // tl.to("#js-slideContainer", 1, { xPercent: -40 }, "label2");
  // tl.from(titles[2], 0.5, { opacity: 0 }, "label2+=0.5");
  // tl.to("#js-slideContainer", 1, { xPercent: -60 }, "label3");
  // tl.from(titles[3], 0.5, { opacity: 0 }, "label3+=0.5");



  // @ts-ignore
  new ScrollMagic.Scene({
    triggerElement: "#roadmap",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin("#roadmap")
    .setTween(tl)

    .addTo(controller);





}