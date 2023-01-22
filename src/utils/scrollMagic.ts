export async function mint(id: string, sections: string[]) {
  if (typeof window === undefined) return;
  // @ts-ignore
  const controller = new window.ScrollMagic.Controller();
  // @ts-ignore
  const tl = new window.TimelineMax();
  sections.forEach((item, index) => {
    tl.fromTo(
      item,
      1,
      { xPercent: 100 },
      // @ts-ignore
      { xPercent: 0, ease: window.Linear.easeNone },
      "+=1"
    );
  })


  // @ts-ignore
  new window.ScrollMagic.Scene({
    triggerElement: `#${id}`,
    triggerHook: "onLeave",
    duration: "100%"
  })
    .setPin(`#${id}`)
    // @ts-ignore
    .setTween(tl)

    .addTo(controller);

}

export async function story(id: string, childrenClass: string) {
  // @ts-ignore
  var controller = new ScrollMagic.Controller();
  // @ts-ignore
  var tl = new TimelineMax();
  tl.staggerFrom(childrenClass, 1.25, {
    scale: 0,
    cycle: {
      y: [-50, 50]
    },
    // @ts-ignore
    ease: Elastic.easeOut,
    stagger: {
      from: "center",
      amount: 0.25
    }
  });

  // @ts-ignore
  var scene = new ScrollMagic.Scene({
    triggerElement: `#${id}`,
    triggerHook: "onEnter",
    // duration: "50%",
  })

    .setTween(tl)
    .addTo(controller);
}

export async function roadMap() {
  // @ts-ignore
  TweenLite.defaultEase = Linear.easeNone;
  var titles = document.querySelectorAll(".sectionTitle");
  // @ts-ignore
  var controller = new ScrollMagic.Controller();
  // @ts-ignore
  var tl = new TimelineMax();

  // create timeline
  // this could also be created in a loop
  for (let index = 1; index < titles.length; index++) {
    const percent = - 20 * index;
    tl.to("#js-slideContainer", 1, { xPercent: percent }, `label${index}`);
    tl.from(titles[index], 0.5, { opacity: 0 }, `label${index}+=0.5`);

  }
  // tl.to("#js-slideContainer", 1, { xPercent: -20 }, "label1");
  // tl.from(titles[1], 0.5, { opacity: 0 }, "label1+=0.5");
  // tl.to("#js-slideContainer", 1, { xPercent: -40 }, "label2");
  // tl.from(titles[2], 0.5, { opacity: 0 }, "label2+=0.5");
  // tl.to("#js-slideContainer", 1, { xPercent: -60 }, "label3");
  // tl.from(titles[3], 0.5, { opacity: 0 }, "label3+=0.5");
  // tl.to("#js-slideContainer", 1, { xPercent: -80 }, "label4");
  // tl.from(titles[4], 0.5, { opacity: 0 }, "label4+=0.5");


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