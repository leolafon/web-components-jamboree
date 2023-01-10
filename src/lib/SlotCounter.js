const template = document.createElement('template');
template.innerHTML = `
  <button>
    <slot name="content">Default text</slot>
  </button>
`;

class SlotCounter extends HTMLElement {
  constructor() {
    super();

    this
      .attachShadow({ mode: 'open' })
      .append(template.content.cloneNode(true));
  }
}

customElements.define('slot-counter', SlotCounter);
