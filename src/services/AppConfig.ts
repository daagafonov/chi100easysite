import axios from "axios";

export default class AppConfig {

    apiURI: string = '';

    init(callback: Function) {
        axios.get('/static/app.config.json').then(response => {

            this.apiURI = response.data.backendUrl;

            callback();

        }).catch(error => {
            console.log(error);
        })
    }

}

export const appConfig = new AppConfig();
