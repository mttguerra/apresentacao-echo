import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b11', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const rows = section.querySelectorAll('.b11-row');

    gsap.set([eyebrow, title], { opacity: 0, y: 20 });
    gsap.set(rows, { opacity: 0, x: -20 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(rows, { opacity: 1, x: 0, duration: DURATION.base, ease: EASE.snappy, stagger: 0.08 }, '-=0.15');
  },
});
