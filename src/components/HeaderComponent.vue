<template>

    <div class="chisto-prosto-head">
        <div class="header">
            <nav class="navbar navbar-default navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand page-logo" href="#">
                        <img src="images/logo_chisto-prosto_white-01.png" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#about">О НАС</a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#service">УСЛУГИ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#shares">АКЦИИ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#deliver">ДОСТАВКА</a></li>
                            <li class="nav-item"><a class="nav-link" href="#cost">СТОИМОСТЬ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#brand">БРЕНДЫ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#order">ЗАКАЗ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">КОНТАКТЫ</a></li>
                            <li class="nav-item"><a class="nav-link" href="#bot">ЧАТ-БОТ</a></li>
                        </ul>
                    </div>
                </div>

                <div class="make-call">
                    <a href="#order"><span><img src="images/phone-icon.png" alt=""></span><span>Заказать звонок</span>
                    </a>
                </div>

            </nav>
        </div>
        <div class="our-care-title">
            <div class="your-clean-stuff">ЧИСТОТА ВАШИХ ВЕЩЕЙ –</div>
            <div class="clean-care">НАША ЗАБОТА</div>
        </div>
        <div class="chisto-prosto-anchors">
            <div><a href="#contact">ПОДРОБНЕЕ</a></div>
            <div><a href="#order">ЗАКАЗАТЬ</a></div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class HeaderComponent extends Vue {

}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
