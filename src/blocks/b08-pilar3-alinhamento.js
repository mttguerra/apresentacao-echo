import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b08', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const sub = section.querySelector('.t-subtitle');
    const items = section.querySelectorAll('.b08-item');

    gsap.set([eyebrow, title, sub], { opacity: 0, y: 20 });
    gsap.set(items, { opacity: 0, y: 30 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(sub, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy }, '-=0.2');
    tl.to(items, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.explosive, stagger: 0.08 }, '-=0.1');
  },
});
