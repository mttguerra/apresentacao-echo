import { describe, it, expect, beforeAll } from 'vitest';
import '../src/components/slide-image.js';

describe('<slide-image>', () => {
  beforeAll(() => {
    customElements.upgrade(document.body);
  });

  it('renderiza placeholder quando não tem src', () => {
    const el = document.createElement('slide-image');
    el.setAttribute('aspect', '16:9');
    el.setAttribute('brief', 'Logo Echo em fundo escuro');
    document.body.appendChild(el);

    const placeholder = el.shadowRoot.querySelector('.placeholder');
    expect(placeholder).not.toBeNull();
    expect(el.shadowRoot.querySelector('img')).toBeNull();
  });

  it('expõe o brief no minibox de hover', () => {
    const el = document.createElement('slide-image');
    el.setAttribute('aspect', '16:9');
    el.setAttribute('brief', 'Print de painel do Metabase');
    document.body.appendChild(el);

    const tip = el.shadowRoot.querySelector('.minibox');
    expect(tip.textContent).toContain('Print de painel do Metabase');
  });

  it('vira <img> quando src é fornecido', () => {
    const el = document.createElement('slide-image');
    el.setAttribute('aspect', '16:9');
    el.setAttribute('brief', '...');
    el.setAttribute('src', '/img/logo-echo.png');
    el.setAttribute('alt', 'Logo Echo');
    document.body.appendChild(el);

    const img = el.shadowRoot.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe('/img/logo-echo.png');
    expect(img.getAttribute('alt')).toBe('Logo Echo');
    expect(el.shadowRoot.querySelector('.placeholder')).toBeNull();
  });

  it('respeita aspect ratio no container', () => {
    const el = document.createElement('slide-image');
    el.setAttribute('aspect', '9:16');
    el.setAttribute('brief', '...');
    document.body.appendChild(el);

    const container = el.shadowRoot.querySelector('.container');
    expect(container.style.aspectRatio).toBe('9 / 16');
  });
});
