import {html, render} from 'lit-html';

class SceneAbout extends HTMLElement {

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
                    <ion-title id="title">About Us</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content id="content" style="background-color: white">
                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>Making every moment count</ion-card-subtitle>
                        <ion-card-title>Welcome To Our Company!</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h3 style="font-weight: bold">We are awesome!</h3>
                        <br>
                        <p>We've done so many cool things, you should give us money.</p>
                        <br>
                        <p style="font-weight: bold;color:#00A79D;"><em>Our mission is to be the best of the best of the best, Sir!</em></p>
                    </ion-card-content>
                </ion-card>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>
                            Our Promise To You
                        </ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <p>We're really nice, and we'll do good things.</p>
                    </ion-card-content>
                </ion-card>
            </ion-content>
        `;

        this.render();

    }

    async render() {
        render(this.template({}), this);
    }

}
customElements.define('scene-about', SceneAbout);
export default SceneAbout;