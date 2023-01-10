const template = document.createElement('template');
template.innerHTML = `
  <style>
    button {
      background-color: var(--custom-background, yellow);
    }
  </style>
  <button>
    scoped style count is <span id="my-span">0</span>
  </button>
`;


class ScopedStyleButton extends HTMLElement {
  constructor() {
    super();

    this
      .attachShadow({ mode: 'open' })
      .append(template.content.cloneNode(true));

    this.count = 0;
    const mySpan = this.shadowRoot.querySelector('#my-span');
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      this.count += 1;
      mySpan.textContent = this.count.toString();
    });

    // const stylesheet = document.createElement('link');
    // stylesheet.setAttribute('rel', 'stylesheet')
    // stylesheet.setAttribute('href', 'src/app.css');
    // this.shadowRoot.appendChild(stylesheet);
  }
}

customElements.define('scoped-style-counter', ScopedStyleButton);
