export class WCBasic extends HTMLElement {

  constructor() {
    super();
    // Initialize variables here
  }

  async connectedCallback() {
    // This runs when the element is rendered
  }

}

customElements.define('wc-basic', WCBasic);