import {createStore} from 'vuex';
import axios from 'axios';
import {appConfig} from "@/services/AppConfig";
import EventService from "@/services/event.service";

export default createStore({
    state: {

    },
    mutations: {
        makeOrder(state, payload) {
            EventService.sendEvent('makeOrderSuccess', {
                payload
            });
        },
        error(state, payload) {

        }
    },
    actions: {
        makeOrder({commit}, payload) {

            const params = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            axios.post(`${appConfig.apiURI}/service/callme`, payload, params).then(response => {
                commit('makeOrder', response.data);
            }).catch(error => {
                commit('error', error);
            });
        }
    }
});
