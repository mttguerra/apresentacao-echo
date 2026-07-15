import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b02', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const stats = section.querySelectorAll('.b02-stat');
    const numbers = section.querySelectorAll('.big-number');
    const punch = section.querySelector('.b02-punch');

    gsap.set([eyebrow, title, punch], { opacity: 0, y: 20 });
    gsap.set(stats, { opacity: 0, y: 30 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(stats, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.explosive, stagger: 0.1 }, '-=0.15');
    tl.from(numbers, { scale: 0.7, duration: DURATION.base, ease: EASE.bounceIn, stagger: 0.1 }, '-=0.35');
    tl.to(punch, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '+=0.2');
  },
});
