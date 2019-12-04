import '../../../css/theme.css';

import {html, render} from 'lit-html';

import SceneHome from '../scene/scene-home';
import SceneProfile from '../scene/scene-profile';
import SceneContactUs from '../scene/scene-contact-us';
import SceneSettings from '../scene/scene-settings';
import SceneAbout from '../scene/scene-about';

/**
 * This is the main application class
 */
class ComponentMain extends HTMLElement {

    constructor() {
        super();
        this.version = VERSION;
        this.environment = NODE_ENV;
        console.log(`Starting Application v${this.version} in ${this.environment} environment.`)

        this.menu_state = {
            disable_home: false,
            disable_profile: false,
            disable_contact_us: false,
            disable_settings: false,
            disable_about: false,
        };

        //this is so that we have a nice simple property that we can await to know everything is loaded... 
        //i.e. await this.ready
        //or await document.querySelector('app-main').ready
        this._ready_promise = new Promise(
            (resolve, reject) => {
                this._ready_resolve = resolve;
            }
        );

        this.my_sitters = [];
    }

    get ready() {
        return this._ready_promise;
    }

    connectedCallback() {
        this.template = () => html`
        <ion-app style="overflow-y: auto">
            <ion-router @ionRouteDidChange=${(e) => this.handleRouteChange(e)}>
                <ion-route url='/' component='scene-home'></ion-route>
                <ion-route url='/home' component='scene-home'></ion-route>
                <ion-route url='/profile' component='scene-profile'>
                    <ion-route url='/profile' component='tab-profile'></ion-route>
                    <ion-route url='/users' component='tab-users'></ion-route>
                    <ion-route url='/schedule' component='tab-schedule'></ion-route>
                    <ion-route url='/billing' component='tab-billing'></ion-route>
                    <ion-route component='tab-profile'></ion-route>
                </ion-route>
                <ion-route url='/contact-us' component='scene-contact-us'></ion-route>
                <ion-route url='/settings' component='scene-settings'></ion-route>
                <ion-route url='/about' component='scene-about'></ion-route>
            </ion-router>
            
            <ion-menu content-id="app_content">
                <ion-content>
                    <ion-list id="left_menu_list" lines="none">
                        <ion-menu-toggle auto-hide="false">
                            <ion-item button href="" disabled="${this.menu_state.disable_home}">
                                <ion-icon slot="start" name='home'></ion-icon>
                                <ion-label>
                                    Home
                                </ion-label>
                            </ion-item>
                            <ion-item button href="profile" disabled="${this.menu_state.disable_profile}">
                                <ion-icon slot="start" name='people'></ion-icon>
                                <ion-label>
                                    Profile
                                </ion-label>
                            </ion-item>
                            <ion-item button href="contact-us" disabled="${this.menu_state.disable_contact_us}">
                                <ion-icon slot="start" name='mail'></ion-icon>
                                <ion-label>
                                    Contact Us
                                </ion-label>
                            </ion-item>
                            <ion-item-divider></ion-item-divider>
                            <ion-item button href="settings" disabled="${this.menu_state.disable_setting}">
                                <ion-icon slot="start" name='settings'></ion-icon>
                                <ion-label>
                                    Settings
                                </ion-label>
                            </ion-item>
                            <ion-item button href="about" disabled="${this.menu_state.disable_about}">
                                <ion-icon slot="start" name='information-circle'></ion-icon>
                                <ion-label>
                                    About SmartSitting
                                </ion-label>
                            </ion-item>
                        </ion-menu-toggle>
                    </ion-list>
                </ion-content>
            </ion-menu>
            <ion-nav id="app_content" animated="true"></ion-nav>

            <ion-loading-controller></ion-loading-controller>
            <ion-modal-controller></ion-modal-controller>
            <ion-picker-controller></ion-picker-controller>
            <ion-alert-controller></ion-alert-controller>
            <ion-toast-controller></ion-toast-controller>
            <ion-progress-bar style="opacity:0; transition: opacity 0.25s linear;" color="warning" type="indeterminate" value="0"></ion-progress-bar>
        </ion-app>
        `;
        this.render();
        this.init();
        
        this.progress_bar = this.querySelector('ion-progress-bar');
    }

    async init() {
        let ion_app = this.querySelector("ion-app");
        //wait for ionic to load
        let loading_interval = setInterval(
            async () => {
                if(!ion_app.componentOnReady) {
                    console.warn("ionic not loaded, delaying 10ms...");
                    return;
                }

                clearInterval(loading_interval);

                await ion_app.componentOnReady();
                this._ready_resolve();
            }, 10
        );

        await this.refreshData();
    }

    /**
     * There's some data that's core the the family app that we go ahead and load at startup time
     */
    async refreshData() {
        let loading_controller = document.querySelector('ion-loading-controller');
        let loading = await loading_controller.create({
            message: "Loading..."
        });
        await loading.present();
        //pretend we're loading data here
        setTimeout(async () => {
            await loading_controller.dismiss();
            this.render();

        }, 2000)
    }

    handleRouteChange(e) {
        let data = e.detail;
        //if using GA and tracking screen views, try something like this:
        /*gtag('event','screen_view', {
            app_version: NODE_ENV + ": " + VERSION,
            screen_name: data.to,
        });*/
    }

    render() {
        render(this.template({}), this);
    }

    async handleLoading() {
        this.progress_bar.style.opacity = 1;
    }

    handleLoadingComplete() {
        this.progress_bar.style.opacity = 0;
    }

}

customElements.define("component-main", ComponentMain);
export default ComponentMain;