let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });
