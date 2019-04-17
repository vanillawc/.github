const template = document.createElement('template');
template.innerHTML = `<p>This text needs some color</p>`;

export class WCBasicAttributes extends HTMLElement {

  constructor() {
    super();
    this.appendChild(document.importNode(template.content, true));
    // Initialize variables here
  }

  static get observedAttributes() {
    // Tag attributes to monitor for updates
    return ['color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // This method is a catch-all for attribute updates
    switch(name) {
      case 'color':
        this.color = newValue;
    }
  }

  // Use getter/setters to capture changes via element property
  get () { return this.getAttribute('color'); }
  set (value) { this.style.color = value; }

  async connectedCallback() {
    // This runs when the element loads
  }

}

customElements.define('wc-basic-attributes', WC);