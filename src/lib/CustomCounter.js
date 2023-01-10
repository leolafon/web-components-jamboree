class CustomCounter extends HTMLElement {
  constructor() {
    super();

    this.count = 0;
  }

  connectedCallback() {
    this.innerHTML = `
      <button>
        <span id="count-placeholder">custom count is 0</span>
      </button>
    `;

    const button = this.querySelector('button');
    const countPlaceholder = this.querySelector('#count-placeholder');

    button.addEventListener('click', () => {
      this.count += 1;
      countPlaceholder.textContent = `custom count is ${this.count.toString()}`;
    })
  }
}

customElements.define('custom-counter', CustomCounter);
