import {html, render} from 'lit-html';

class SceneContactUs extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {
        this.template = (data) => html`
            <style>
                :host {
                    justify-content: flex-start !important;
                    position: relative;
                    background-color: #f0f0f0;
                }
                #content {
                    --padding-top: 1vh;
                    --padding-bottom: 1vh;
                    --padding-start: 1vw;
                    --padding-end: 1vw;
                    --background: var(--light);
                }
            </style>

            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                    <ion-title id="title">Contact Us</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content id="content" style="background-color: white">
                <p>Call us to talk about things</p>
            </ion-content>
        `;

        this.render();

    }

    async render() {
        render(this.template({}), this);
    }

}
customElements.define('scene-contact-us', SceneContactUs);
export default SceneContactUs;