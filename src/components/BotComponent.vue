<template>
    <div class="bot">
        <div class="row">
            <div class="col-12">
                Чисто Просто Бот
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                Просто отсканируй QR
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img src="images/qrcode.59572609.png" />
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <span>или перейди по ссылке</span><a href="https://t.me/chi100easybot" target="_blank"> Телеграм </a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({})
export default class BotComponent extends Vue {

}
</script>
<style lang="scss">
.bot {
    width: 100%;
    text-align: center;
}
</style>
