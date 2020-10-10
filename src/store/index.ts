import {createStore} from 'vuex';
import axios from 'axios';
import {appConfig} from "@/services/AppConfig";

export default createStore({
    state: {},
    mutations: {},
    actions: {
        makeOrder({commit}, payload) {

            const params = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            axios.post(`${appConfig.apiURI}/service/callme`, payload, params).then(response => {
                commit('sent', response.data);
            }).catch(error => {
                commit('error', error);
            });
        }
    }
});
