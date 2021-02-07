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
                    <input type="text" id="posName" placeholder="ИМЯ" v-model="form.orderName" maxlength="30">
                    <input type="tel" id="posPhone" placeholder="ТЕЛЕФОН (+380...)" v-model="form.orderPhone" maxlength="13">
                    <input type="submit" class="btn" :class="{ 'btn-warning': formValid(), 'btn-success': !formValid(), 'disabled': formValid()}" @click="makeOrder($event)"  v-model="buttonCaption" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import EventService from "@/services/event.service.ts";
import {useStore} from "vuex";

const phoneRegex = /^(\+38)?\d{10}$/;

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
            formSubmitionState: true,
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
        formValid() {
            return !(this.form.orderName.trim() !== '' && this.form.orderName.trim().length >= 3 && this.form.orderPhone.trim() !== '' && phoneRegex.test(this.form.orderPhone));
        },
        makeOrder(event) {

            this.formSubmitionState = true;
            this.$store.dispatch('makeOrder', {
                name: this.form.orderName,
                phone: this.form.orderPhone,
            });

        },
        clearForm() {
            this.form.orderName = '';
            this.form.orderPhone = '';
        }
    }

}
</script>

<style>

.btn-warning.disabled, .btn-warning:disabled {
    font-weight: bold !important;
}

</style>
