<template>
  <div class="header">
    <nav class="navbar navbar-default navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand page-logo" href="#">
          <img src="images/logo_chisto-prosto_white-01.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="#about">О НАС</a></li>
            <li class="nav-item"><a class="nav-link" href="#service">УСЛУГИ</a></li>
            <li class="nav-item"><a class="nav-link" href="#shares">АКЦИИ</a></li>
            <li class="nav-item"><a class="nav-link" href="#deliver">ДОСТАВКА</a></li>
            <li class="nav-item"><a class="nav-link" href="#cost">СТОИМОСТЬ</a></li>
            <li class="nav-item"><a class="nav-link" href="#brand">БРЕНДЫ</a></li>
            <li class="nav-item"><a class="nav-link" href="#order">ЗАКАЗ</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">КОНТАКТЫ</a></li>
          </ul>
        </div>
      </div>

      <div class="make-call">
        <a href="#order"><span><img src="images/phone-icon.png" alt=""></span><span>Заказать звонок</span> </a>
      </div>

    </nav>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({

})
export default class HeaderComponent extends Vue {

}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
