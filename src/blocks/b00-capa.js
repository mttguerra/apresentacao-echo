import gsap from 'gsap';
import { registerBlock } from '../animations/timelines.js';
import { EASE, DURATION } from '../animations/helpers.js';

registerBlock('b00', {
  onShow(section) {
    const logo = section.querySelector('.b00-logo');
    const headline = section.querySelector('.b00-headline');
    const sub = section.querySelector('.b00-sub');
    const badges = section.querySelectorAll('.badge');

    gsap.set([logo, headline, sub], { opacity: 0, y: 24 });
    gsap.set(badges, { opacity: 0, y: 12 });

    const tl = gsap.timeline();
    tl.to(logo, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy });
    tl.to(headline, { opacity: 1, y: 0, duration: DURATION.slow, ease: EASE.explosive }, '-=0.15');
    tl.to(sub, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy }, '-=0.25');
    tl.to(badges, { opacity: 1, y: 0, duration: DURATION.base, ease: EASE.snappy, stagger: 0.08 }, '-=0.1');
  },
});
