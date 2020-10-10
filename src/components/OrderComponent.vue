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
                <form action="">
                </form>
                <form action="" method="post" id="cForm1" role="form" onsubmit="return false;">
                    <input type="text" id="posName" placeholder="ИМЯ" v-model="orderName">
                    <input type="tel" id="posPhone" placeholder="ТЕЛЕФОН" v-model="orderPhone">
                    <button type="submit" id="send" class="btn" @click="makeOrder">ЗАКАЗАТЬ</button>
                    <div class="load-block">
                        <div align="center" id="loadBar"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {useStore} from "vuex";

@Options({})
export default class OrderComponent extends Vue {

    public orderName: string = '';
    public orderPhone: string = '';

    store = useStore();

    data() {
        return {};
    }

    beforeCreate() {
        console.log('store=', this.store);
    }

    makeOrder(event: any) {
        this.store.dispatch('makeOrder', {
            name: this.orderName,
            phone: this.orderPhone,
        });
    }
}
</script>
