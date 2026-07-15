import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b01', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const cols = section.querySelectorAll('.b01-col');
    const bullets = section.querySelectorAll('.bullet');

    gsap.set([eyebrow, title], { opacity: 0, y: 16 });
    gsap.set(cols, { opacity: 0, y: 24 });
    gsap.set(bullets, { opacity: 0, x: -12 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(cols, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.explosive, stagger: 0.1 }, '-=0.15');
    tl.to(bullets, { opacity: 1, x: 0, duration: DURATION.fast, ease: EASE.snappy, stagger: 0.05 }, '-=0.25');
  },
});
