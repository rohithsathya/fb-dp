//https://graph.facebook.com/{facebookId}/picture?type=large
class fbDP extends HTMLElement {
    // A getter/setter for an uid property.
    get uid() {
        return this.getAttribute('uid');
    }

    set uid(val) {
        if (val) {
            this.setAttribute('uid', val);
        }
    }
    constructor() {
        // If you define a ctor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
    }
    connectedCallback() {
        this.initShadowDom();
    }

    static get observedAttributes() { return ['uid']; }
    // Respond to attribute changes.
    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr == 'uid') {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = this.getTemplateString();
            }
        }
    }
    initShadowDom() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = this.getTemplateString();
    }
    getTemplateString() {
        return '<style>fb-dp{display:"block"} img{height:100%;width:100%}</style><img src="https://graph.facebook.com/' + this.uid + '/picture?type=large" />';
    }
}
window.customElements.define('fb-dp', fbDP);