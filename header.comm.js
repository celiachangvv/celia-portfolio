export class Foo extends HTMLElement {
    #style = /* css */ `
        header {
            color: red;
        }
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.#applyStyle();
        this.render();
    }

    render() {
        if (!this.shadowRoot) {
            return;
        }
        this.shadowRoot.innerHTML = /* html */ `
        <header>
            ${this.getAttribute('title') ?? ''}
        </header>
        `;
    }

    #applyStyle() {
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(this.#style);
        this.shadowRoot.adoptedStyleSheets = [styleSheet];
    }
}

customElements.define('my-foo', Foo);