<template>
  <div>
    <video autoplay="" loop="" poster="images/clothing.jpg" id="bgvid">
      <source src="images/clothing.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;">
      <source src="images/clothing.webm" type="video/webm">
      <source src="images/clothing.mp4" type="video/mp4">
    </video>

    <div class="page">
      <div class="chisto-prosto-head">
        <HeaderComponent/>
        <div class="our-care-title">
          <div class="your-clean-stuff">ЧИСТОТА ВАШИХ ВЕЩЕЙ –</div>
          <div class="clean-care">НАША ЗАБОТА</div>
        </div>
        <div class="chisto-prosto-anchors">
          <div><a href="#contact">ПОДРОБНЕЕ</a></div>
          <div><a href="#order">ЗАКАЗАТЬ</a></div>
        </div>
      </div>
      <div class="chisto-about" id="about">
        <div class="about-title">
          <div class="main-logo">
            <img src="images/logo_chisto_3.png" alt="">
          </div>
          <div>О НАС</div>
        </div>
        <div class="about-us-description">
          <p class="">
            Чистота Ваших вещей – наша забота! <br>
            Мы берём на себя все заботы о стирке и глажке, тем самым экономим Ваше свободное время. Просто соберите вещи
            и
            позвоните нам - остальное сделает «Чисто Просто».
          </p>
        </div>
      </div>
      <div class="services-block" id="service">
        <div class="services-block-content">
          <div class="chisto-service">
            <div class="chisto-service-item">
              <div class="chisto-service-item-icon">
                <img src="images/washing-machine.png" alt="">
              </div>
              <div class="chisto-service-item-description">
                Бережная стирка и ЧИСТКА
              </div>
            </div>
            <div class="order-service">
              <a href="#order">ЗАКАЗАТЬ </a>
            </div>
          </div>
          <div class="chisto-service">
            <div class="chisto-service-item">
              <div class="chisto-service-item-icon">
                <img src="images/ironing.png" alt="">
              </div>
              <div class="chisto-service-item-description">
                БЕЗУПРЕЧНАЯ ГЛАЖКА ДАЖЕ САМЫХ ДЕЛИКАТНЫХ ТКАНЕЙ
              </div>
            </div>
            <div class="order-service">
              <a href="#order">ЗАКАЗАТЬ </a>
            </div>
          </div>
          <div class="chisto-service">
            <div class="chisto-service-item">
              <div class="chisto-service-item-icon">
                <img src="images/pin.png" alt="">
              </div>
              <div class="chisto-service-item-description">
                Качественный ремонт одежды
              </div>
            </div>
            <div class="order-service">
              <a href="#order">ЗАКАЗАТЬ </a>
            </div>
          </div>
        </div>
      </div>
      <div class="service-quality" id="shares">
        <div class="service-quality-content">
          <div class="service-quality-item">
            <div class="service-quality-item-head">
              90%
            </div>
            <div class="service-quality-item-main">
              ПЯТЕН ВЫВОДИМ БЕЗ СЛЕДА
            </div>
          </div>
          <!--
  <div class="service-quality-item">
  <div class="service-quality-item-head">
  -50%
  </div>
  <div class="service-quality-item-main">
  НА ГЛАЖКУ ПРИ ЗАКАЗЕ СТИРКИ
  </div>
  </div>
  -->
          <div class="service-quality-item">
            <div class="service-quality-item-head">
              24ч
            </div>
            <div class="service-quality-item-main">
              СРЕДНЕЕ ВРЕМЯ ВЫПОЛНЕНИЯ ЗАКАЗА
            </div>
          </div>
        </div>
      </div>
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
            <form action="" method="post" id="cForm1" role="form">
              <input type="text" id="posName" placeholder="ИМЯ">
              <input type="tel" id="posPhone" placeholder="ТЕЛЕФОН">
              <button type="submit" id="send" class="btn">ЗАКАЗАТЬ</button>
              <div class="load-block">
                <div align="center" id="loadBar"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="service-delivery" id="deliver">
        <div class="service-delivery-content">
          <div class="service-delivery-man">
            <img src="images/man.png" alt="">
          </div>
          <div class="service-delivery-main">
            <div class="service-delivery-main-title">
              КУРЬЕРСКАЯ ДОСТАВКА
            </div>
            <div class="service-delivery-main-subtitle">
              НЕ УСПЕВАЕТЕ ЗАЕХАТЬ К НАМ? ПРОСТО СОБЕРИТЕ ВЕЩИ
            </div>
            <div class="delivery-man-do">
              НАШ КУРЬЕР ЗАБЕРЕТ ИХ, <br>
              А ЗАТЕМ ПРИВЕЗЕТ ЧИСТУЮ ВЫГЛАЖЕННУЮ ОДЕЖДУ
            </div>
            <div class="comfortable">
              <div class="comfortable-place">
                <div class="comfortable-icon">
                  <img src="images/map-mark.png" alt="">
                </div>
                <div class="comfortable-name">
                                    <span>
                                        В УДОБНОЕ
                                    </span>
                  <span>
                                        МЕСТО
                                    </span>
                </div>
              </div>
              <div class="comfortable-time">
                <div class="comfortable-icon">
                  <img src="images/clock.png" alt="">
                </div>
                <div class="comfortable-name">
                                    <span>
                                        В УДОБНОЕ
                                    </span>
                  <span>
                                        ВРЕМЯ
                                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="customers-feedback" id="feedback">
        <div class="customers-feedback-content">
          <div class="swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="1">
                <div class="customer-image">
                  <img src="images/customer.png" alt="">
                </div>
                <div class="customer-name-age">
                  МАРИНА, 29 ЛЕТ
                </div>
                <div class="customer-quote">
                  <p>
                    И У МЕНЯ И У МУЖА ОТВЕТСТВЕННАЯ РАБОТА - ЕЖЕДНЕВНЫЕ ВСТРЕЧИ, СВЕРХУРОЧНЫЕ ПРОЕКТЫ. НЕРЕДКО УЖИНАЕМ
                    НЕ
                    ДОМА И В ДЕЛОВЫХ КОСТЮМАХ ХОДИМ НА ВЕЧЕРНИЕ КИНОСЕАНСЫ.

                  </p>
                  <p>
                    ДЕРЖАТЬ ГАРДЕРОБ В БЕЗУПРЕЧНОМ ВИДЕ ПРИ ТАКОМ РИТМЕ ЖИЗНИ НЕСПРОСТО. ВЫРУЧАЕТ “ЧИСТО-ПРОСТО”. РЕБЯТА
                    НЕ РАЗ ПОДВОЗИЛИ МНЕ СВЕЖЕЕ ПЛАТЬЕ ЗА ЧАС ДО ВСТРЕЧИ ИЛИ ПЕРЕД ВЫХОДОМ В ТЕАТР. ЭТО ОЧЕНЬ УДОБНО И
                    САМОЕ ГЛАВНОЕ - ДОСТУПНО.
                  </p>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="0">
                <div class="customer-image">
                  <img src="images/customer.png" alt="">
                </div>
                <div class="customer-name-age">
                  МАРИНА, 29 ЛЕТ
                </div>
                <div class="customer-quote">
                  <p>
                    И У МЕНЯ И У МУЖА ОТВЕТСТВЕННАЯ РАБОТА - ЕЖЕДНЕВНЫЕ ВСТРЕЧИ, СВЕРХУРОЧНЫЕ ПРОЕКТЫ. НЕРЕДКО УЖИНАЕМ
                    НЕ
                    ДОМА И В ДЕЛОВЫХ КОСТЮМАХ ХОДИМ НА ВЕЧЕРНИЕ КИНОСЕАНСЫ.

                  </p>
                  <p>
                    ДЕРЖАТЬ ГАРДЕРОБ В БЕЗУПРЕЧНОМ ВИДЕ ПРИ ТАКОМ РИТМЕ ЖИЗНИ НЕСПРОСТО. ВЫРУЧАЕТ “ЧИСТО-ПРОСТО”. РЕБЯТА
                    НЕ РАЗ ПОДВОЗИЛИ МНЕ СВЕЖЕЕ ПЛАТЬЕ ЗА ЧАС ДО ВСТРЕЧИ ИЛИ ПЕРЕД ВЫХОДОМ В ТЕАТР. ЭТО ОЧЕНЬ УДОБНО И
                    САМОЕ ГЛАВНОЕ - ДОСТУПНО.
                  </p>
                </div>
              </div>
              <div class="swiper-slide" data-swiper-slide-index="1">
                <div class="customer-image">
                  <img src="images/customer.png" alt="">
                </div>
                <div class="customer-name-age">
                  МАРИНА, 29 ЛЕТ
                </div>
                <div class="customer-quote">
                  <p>
                    И У МЕНЯ И У МУЖА ОТВЕТСТВЕННАЯ РАБОТА - ЕЖЕДНЕВНЫЕ ВСТРЕЧИ, СВЕРХУРОЧНЫЕ ПРОЕКТЫ. НЕРЕДКО УЖИНАЕМ
                    НЕ
                    ДОМА И В ДЕЛОВЫХ КОСТЮМАХ ХОДИМ НА ВЕЧЕРНИЕ КИНОСЕАНСЫ.

                  </p>
                  <p>
                    ДЕРЖАТЬ ГАРДЕРОБ В БЕЗУПРЕЧНОМ ВИДЕ ПРИ ТАКОМ РИТМЕ ЖИЗНИ НЕСПРОСТО. ВЫРУЧАЕТ “ЧИСТО-ПРОСТО”. РЕБЯТА
                    НЕ РАЗ ПОДВОЗИЛИ МНЕ СВЕЖЕЕ ПЛАТЬЕ ЗА ЧАС ДО ВСТРЕЧИ ИЛИ ПЕРЕД ВЫХОДОМ В ТЕАТР. ЭТО ОЧЕНЬ УДОБНО И
                    САМОЕ ГЛАВНОЕ - ДОСТУПНО.
                  </p>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0">
                <div class="customer-image">
                  <img src="images/customer.png" alt="">
                </div>
                <div class="customer-name-age">
                  МАРИНА, 29 ЛЕТ
                </div>
                <div class="customer-quote">
                  <p>
                    И У МЕНЯ И У МУЖА ОТВЕТСТВЕННАЯ РАБОТА - ЕЖЕДНЕВНЫЕ ВСТРЕЧИ, СВЕРХУРОЧНЫЕ ПРОЕКТЫ. НЕРЕДКО УЖИНАЕМ
                    НЕ
                    ДОМА И В ДЕЛОВЫХ КОСТЮМАХ ХОДИМ НА ВЕЧЕРНИЕ КИНОСЕАНСЫ.

                  </p>
                  <p>
                    ДЕРЖАТЬ ГАРДЕРОБ В БЕЗУПРЕЧНОМ ВИДЕ ПРИ ТАКОМ РИТМЕ ЖИЗНИ НЕСПРОСТО. ВЫРУЧАЕТ “ЧИСТО-ПРОСТО”. РЕБЯТА
                    НЕ РАЗ ПОДВОЗИЛИ МНЕ СВЕЖЕЕ ПЛАТЬЕ ЗА ЧАС ДО ВСТРЕЧИ ИЛИ ПЕРЕД ВЫХОДОМ В ТЕАТР. ЭТО ОЧЕНЬ УДОБНО И
                    САМОЕ ГЛАВНОЕ - ДОСТУПНО.
                  </p>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
      </div>
      <div class="prices" id="cost">
        <div class="prices-title">
          СТОИМОСТЬ
        </div>
        <div class="prices-content">
          <div class="prices-item">
            <div class="price-item-name">
              СВИТЕР
            </div>
            <div class="price-item-icon">
              <img width="45" src="images/sviter.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>120</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              ЮБКА
            </div>
            <div class="price-item-icon">
              <img width="47" src="images/skirt.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>115</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              НИЖНЕЕ БЕЛЬЕ
            </div>
            <div class="price-item-icon">
              <img src="images/lingerie.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>100</span> ГРН (за кг)
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              ВЕРХНЯЯ ОДЕЖДА
            </div>
            <div class="price-item-icon">
              <img src="images/upper-cloth.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>180</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              ДОМАШНЯЯ ОДЕЖДА
            </div>
            <div class="price-item-icon">
              <img src="images/home-cloth.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>50</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              ПОСТЕЛЬНОЕ
            </div>
            <div class="price-item-icon">
              <img src="images/bed.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>160</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              Подушка
            </div>
            <div class="price-item-icon">
              <img src="images/noun_1473.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>95</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              Свадебное платье
            </div>
            <div class="price-item-icon">
              <img src="images/evening-dress.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>770</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              КОСТЮМЫ
            </div>
            <div class="price-item-icon">
              <img src="images/costume.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>240</span> ГРН
            </div>
          </div>
          <div class="prices-item">
            <div class="price-item-name">
              Джинсы
            </div>
            <div class="price-item-icon">
              <img src="images/pants.png" alt="">
            </div>
            <div class="price-item-cost">
              ОТ <span>105</span> ГРН
            </div>
          </div>
        </div>
        <div class="full-price-list">
          <a href="price-list.pdf" download="price">Скачать прайс</a>
        </div>
      </div>
      <div class="partners" id="brand">
        <div class="partners-title">
          БРЕНДЫ
        </div>
        <div class="partners-content">
          <img src="images/1367496663_chr-logo-2pms-bu.png" alt="">
          <img src="images/logo.jpg" alt="">
          <img src="images/Imesa%20logo.jpg" alt="">
          <img src="images/sito.png" alt="">
        </div>
      </div>
      <div class="contacts" id="contact">
        <div class="contacts-title">
          КОНТАКТЫ
        </div>
        <div class="contacts-description">
          <p class="">
            ул. Васильковская, 3 - Тел: +380673202777 <br>
            ул. Днепровська набережная, 19-А (1 подъезд) - Тел: +380962050007 <br>
            Email: info@chystoprosto.com
          </p>
        </div>
        <div class="contacts-map">
          <GoogleMapLoaderComponent></GoogleMapLoaderComponent>
        </div>
      </div>

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
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderComponent from "./HeaderComponent.vue";
import GoogleMapLoaderComponent from "./GoogleMapLoaderComponent.vue";

@Options({
  components: {
    HeaderComponent,
    GoogleMapLoaderComponent
  }
})
export default class Index extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
