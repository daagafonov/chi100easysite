<template>
    <div class="bot" id="bot">
        <div class="row">
            <div class="col-12 text">
                У нас появился новый помощник - чат-бот
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                Просто отсканируй QR
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img width="400px" src="images/qrcode.59572609.png" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <span>или перейди по ссылке</span><a href="https://t.me/chi100easybot" target="_blank"><img class="telegram" src="images/telegram.png" /></a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({})
export default class BotComponent2 extends Vue {

}
</script>
<style lang="scss">
.bot {
    width: 100%;
    text-align: center;
    background-color: white;

    .text {
        text-transform: uppercase;
        font-size: +20pt;
        font-weight: 300;
        color: #314668;
        margin: 10px 0;
    }

    .telegram {
        width: 55px;
    }
}


</style>
