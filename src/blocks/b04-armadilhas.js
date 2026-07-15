import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b04', {
  onShow(section) {
    const eyebrow = section.querySelector('.eyebrow');
    const title = section.querySelector('.t-title');
    const traps = section.querySelectorAll('.b04-trap');
    const note = section.querySelector('.b04-note');

    gsap.set([eyebrow, title, note], { opacity: 0, y: 20 });
    gsap.set(traps, { opacity: 0, y: 30 });

    const tl = gsap.timeline();
    tl.to(eyebrow, { opacity: 1, y: 0, duration: DURATION.fast, ease: EASE.snappy });
    tl.to(title, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.1');
    tl.to(traps, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.explosive, stagger: 0.12 }, '-=0.15');
    tl.to(note, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '+=0.15');
  },
});
