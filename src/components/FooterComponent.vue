<template>
  <div class="footer">
    <div class="page-logo">
      <img src="images/logo_chisto_3.png" width="140" alt="">
    </div>
    <div class="make-call">
      <a href="#order"><span><img src="images/phone-icon.png" alt=""></span> <span>Заказать звонок</span> </a>
      <div class="social-icon">
        <a href="https://www.facebook.com/chystoprosto"><img src="images/fb.png" alt=""></a>
        <!--<a href="https://www.vk.com/chystoprosto"><img src="images/vk.png" alt=""></a>-->
        <a href="https://www.instagram.com/chystoprosto/"><img src="images/instagram.png" alt=""></a>
      </div>
    </div>
    <div class="footer-menu">
      <ul class="footer-menu-list">
        <li class=""><a href="#about">О НАС</a></li>
        <li class=""><a href="#shares">АКЦИИ</a></li>
        <!--                        <li class=""><a href="#">ОТЗЫВЫ</a></li>-->
        <li class=""><a href="#brand">БРЕНДЫ</a></li>
      </ul>
      <ul class="footer-menu-list">
        <li class=""><a href="#service">УСЛУГИ</a></li>
        <li class=""><a href="#deliver">ДОСТАВКА</a></li>
        <li class=""><a href="#cost">СТОИМОСТЬ</a></li>
        <li class=""><a href="#contact">КОНТАКТЫ</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({

})
export default class FooterComponent extends Vue {

}
</script>
