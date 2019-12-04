/**
 * app.js
 *
 * This is the entry point for the application.
 *
 * @author Clay Gulick
 * @email claytongulick@gmail.com
 */

//global scripts
import '@ionic/core/dist/esm';
import {defineCustomElements} from '@ionic/core/dist/esm/loader';

//the main application component
import Main from './view/components/app/component-main';

(
    async () => {
        await defineCustomElements();
        //create the main component and kick off application
        let body = document.querySelector('body');
        body.style.overflowY='auto';
        body.appendChild(new Main());
    }
)();