import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION, glowLoop } from '../animations/helpers.js';

let glowTween = null;

registerBlock('b14', {
  onShow(section) {
    const logo = section.querySelector('.b14-logo');
    const punch = section.querySelector('.b14-punch');
    const steps = section.querySelectorAll('.b14-step');
    const close = section.querySelector('.b14-close');

    gsap.set([logo, punch, close], { opacity: 0, y: 24 });
    gsap.set(steps, { opacity: 0, y: 30 });

    const tl = gsap.timeline();
    tl.to(logo, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy });
    tl.to(punch, { opacity: 1, y: 0, duration: DURATION.slow, ease: EASE.explosive }, '-=0.15');
    tl.to(steps, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.explosive, stagger: 0.12 }, '-=0.15');
    tl.to(close, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '+=0.2');
    tl.call(() => {
      glowTween = glowLoop(logo);
    });
  },
  onHide() {
    if (glowTween) {
      glowTween.kill();
      glowTween = null;
    }
  },
});
