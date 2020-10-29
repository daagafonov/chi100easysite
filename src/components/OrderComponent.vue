<template>
    <div class="service-registration" id="order">
        <div class="service-registration-content">
            <div class="service-registration-title">
                <p>
                    <span class="light-text">Сдавайте вещи и собирайте бонусы: </span>
                </p>
                <p>
                    <span>1 бонус</span><span class="light-text"> = </span> <span>1 грн.</span>
                </p>
            </div>
            <div class="service-registration-form">
                <form action="" method="post" id="cForm1" role="form" onsubmit="return false;">
                    <input type="text" id="posName" placeholder="ИМЯ" v-model="form.orderName">
                    <input type="tel" id="posPhone" placeholder="ТЕЛЕФОН" v-model="form.orderPhone">
                    <button type="submit" class="btn" @click="makeOrder($event)" :disabled="formSubmitionState">{{buttonCaption}}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import EventService from "@/services/event.service.ts";
import {useStore} from "vuex";

export default {
    props: {
        store: useStore(),
    },
    data() {
        return {
            form: {
                orderName: '',
                orderPhone: '',
            },
            formSubmitionState: false,
            buttonCaption: 'ЗАКАЗАТЬ',
        };
    },
    created() {
        EventService.subscribeEvent('makeOrderSuccess', (payload) => {

            this.buttonCaption = 'ВАШ ЗАПРОС ПРИНЯТ. ОЖИДАЙТЕ!';
            this.clearForm();

        });
    },
    methods: {
        makeOrder(event) {
            if (this.form.orderName !== '' && this.form.orderPhone) {
                this.formSubmitionState = true;
                this.$store.dispatch('makeOrder', {
                    name: this.form.orderName,
                    phone: this.form.orderPhone,
                });
            }
        },
        clearForm() {
            this.form.orderName = '';
            this.form.orderPhone = '';
        }
    }

}
</script>
