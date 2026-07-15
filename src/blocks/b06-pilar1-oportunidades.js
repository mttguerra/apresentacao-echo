import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b06', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const steps = section.querySelectorAll('.b06-step');
    const arrows = section.querySelectorAll('.b06-arrow');
    const payoff = section.querySelector('.b06-payoff');

    gsap.set([eyebrow, title, payoff], { opacity: 0, y: 20 });
    gsap.set(steps, { opacity: 0, x: -30 });
    gsap.set(arrows, { opacity: 0, scaleY: 0 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(steps[0], { opacity: 1, x: 0, duration: DURATION.base, ease: EASE.explosive });
    tl.to(arrows[0], { opacity: 1, scaleY: 1, duration: DURATION.fast, ease: EASE.snappy }, '-=0.1');
    tl.to(steps[1], { opacity: 1, x: 0, duration: DURATION.base, ease: EASE.explosive }, '-=0.1');
    tl.to(arrows[1], { opacity: 1, scaleY: 1, duration: DURATION.fast, ease: EASE.snappy }, '-=0.1');
    tl.to(steps[2], { opacity: 1, x: 0, duration: DURATION.base, ease: EASE.explosive }, '-=0.1');
    tl.to(payoff, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.2');
  },
});
