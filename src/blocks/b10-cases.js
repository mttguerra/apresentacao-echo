import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b10', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const cases = section.querySelectorAll('.b10-case');
    const afters = section.querySelectorAll('.b10-after');
    const mults = section.querySelectorAll('.b10-mult');
    const note = section.querySelector('.b10-note');

    gsap.set([eyebrow, title, note], { opacity: 0, y: 20 });
    gsap.set(cases, { opacity: 0, y: 30 });
    gsap.set(afters, { scale: 0.7 });
    gsap.set(mults, { opacity: 0, scale: 0.9 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(cases, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.explosive, stagger: 0.15 }, '-=0.15');
    tl.to(afters, { scale: 1, duration: DURATION.base, ease: EASE.bounceIn, stagger: 0.15 }, '-=0.4');
    tl.to(mults, { opacity: 1, scale: 1, duration: DURATION.base, ease: EASE.snappy, stagger: 0.1 }, '-=0.2');
    tl.to(note, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '+=0.15');
  },
});
