import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b09', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const phases = section.querySelectorAll('.b09-phase');
    const nums = section.querySelectorAll('.b09-phase-num');

    gsap.set([eyebrow, title], { opacity: 0, y: 20 });
    gsap.set(phases, { opacity: 0, y: 20 });
    gsap.set(nums, { scale: 0.6 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(phases, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy, stagger: 0.1 }, '-=0.15');
    tl.to(nums, { scale: 1, duration: DURATION.base, ease: EASE.bounceIn, stagger: 0.08 }, '-=0.4');
  },
});
