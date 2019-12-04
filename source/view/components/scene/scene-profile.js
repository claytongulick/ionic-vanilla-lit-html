import {html, render} from 'lit-html';

class SceneProfile extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = '<slot></slot>';
        this.template = (family) => html`
        <style>
                :host {
                    justify-content: flex-start !important;
                    position: relative;
                    background-color: #f0f0f0;
                }
                #scene_profile_content {
                    --padding-top: 1vh;
                    --padding-bottom: 1vh;
                    --padding-start: 1vw;
                    --padding-end: 1vw;
                }
        </style>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"></ion-back-button>
                </ion-buttons>
                <ion-title id="title">Profile</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="scene_profile_content">
            <ion-tabs id="family_tabs" style="background-color: var(--ion-color-light)">
                <ion-tab tab="tab-profile"> 
                </ion-tab>

                <ion-tab tab="tab-users">
                    <!--<ion-nav></ion-nav>-->
                </ion-tab>

                <ion-tab tab="tab-schedule">
                    <!--<ion-nav></ion-nav>-->
                </ion-tab>

                <ion-tab tab="tab-billing">
                    <!--<ion-nav></ion-nav>-->
                </ion-tab>

                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="tab-profile">
                        <ion-icon name="information-circle"></ion-icon>
                        <ion-label>Profile</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tab-users">
                        <ion-icon name="people"></ion-icon>
                        <ion-label>Users</ion-label>
                    </ion-tab-button>


                    <ion-tab-button tab="tab-schedule">
                        <ion-icon name="calendar"></ion-icon>
                        <ion-label>Schedule</ion-label>
                        <ion-badge>6</ion-badge>
                    </ion-tab-button>

                    <ion-tab-button tab="tab-billing">
                        <ion-icon name="cash"></ion-icon>
                        <ion-label>Billing</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        </ion-content>
        `;

        this.render();
        this.init();

    }

    render() {
        render(this.template(this.family), this);
    }

    async init() {
        await this.loadFamily();

    }
}

customElements.define('scene-profile', SceneProfile);
export default SceneProfile;