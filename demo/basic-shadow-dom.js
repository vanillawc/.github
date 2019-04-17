const template = document.createElement('template');
template.innerHTML = `
<style>
p {
  font-family: Roboto, sans-serif;
  font-weight: bold;
}
<p><slot></slot></p>
`;

export class WCShadowDom extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(document.importNode(template.content, true));
    // Initialize variables here
  }

  async connectedCallback() {
    // Use querySelector to grab reference to an element in the Shadow DOM
    this.shadowRoot.querySelector('p').firstChild().innerHTML = 'Insert some stuff';
    // This runs when the element is rendered
  }

}

customElements.define('wc-shadow-dom', WCShadowDom);