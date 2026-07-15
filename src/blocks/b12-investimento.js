import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b12', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const sub = section.querySelector('.t-subtitle');
    const card = section.querySelector('.b12-card');
    const bullets = section.querySelectorAll('.bullet');
    const compare = section.querySelector('.b12-compare');
    const value = section.querySelector('.b12-value');

    gsap.set([eyebrow, title, sub, compare], { opacity: 0, y: 20 });
    gsap.set(card, { opacity: 0, y: 30, scale: 0.96 });
    gsap.set(bullets, { opacity: 0, x: -12 });
    gsap.set(value, { scale: 0.7 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(sub, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy }, '-=0.2');
    tl.to(card, { opacity: 1, y: 0, scale: 1, duration: DURATION.slow, ease: EASE.explosive }, '-=0.1');
    tl.to(value, { scale: 1, duration: DURATION.base, ease: EASE.bounceIn }, '-=0.35');
    tl.to(bullets, { opacity: 1, x: 0, duration: DURATION.fast, ease: EASE.snappy, stagger: 0.05 }, '-=0.35');
    tl.to(compare, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '+=0.15');
  },
});
