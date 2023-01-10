class AttributeCounter extends HTMLElement {
  static get observedAttributes() {
    return ['value'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <button>
        attribute count is
        <span id="attribute-placeholder">0</span>
      </button>
    `;

    this.placeholderElement = this.querySelector('#attribute-placeholder');
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'value' && this.placeholderElement) {
      this.placeholderElement.textContent = newValue.toString();
    }
  }
}

customElements.define('attribute-counter', AttributeCounter);
