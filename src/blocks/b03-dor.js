import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b03', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const months = section.querySelectorAll('.b03-month');
    const punch = section.querySelector('.b03-punch');

    gsap.set([eyebrow, title, punch], { opacity: 0, y: 20 });
    gsap.set(months, { opacity: 0, y: 30 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(months, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.explosive, stagger: 0.15 }, '-=0.15');
    tl.to(punch, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '+=0.15');
  },
});
