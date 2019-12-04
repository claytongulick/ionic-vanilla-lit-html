import {html, render} from 'lit-html';

class SceneHome extends HTMLElement {
    connectedCallback() {
        this.template = (data) => html`
            <style>
                :host {
                }

                ion-col {
                    margin-top: 3vh;
                }
            </style>

            <ion-content style="text-align: center;" color="primary">
                <ion-toolbar style="--background: transparent; position: absolute;">
                    <ion-buttons slot="start">
                        <ion-menu-toggle>
                            <ion-button>
                                <ion-icon slot="icon-only" name="menu"></ion-icon>
                            </ion-button>
                        </ion-menu-toggle>
                    </ion-buttons>
                </ion-toolbar>
                <br>
                <br>
                <br>
                <p>This is a very fancy home page, with a hero image and inspiring styling.</p>
                <p>Or not.</p>
            </ion-content>
        `;

        render(this.template({}), this);
    }


}
customElements.define('scene-home', SceneHome);
export default SceneHome;