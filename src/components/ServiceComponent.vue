<template>
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
</template>
<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class ServiceComponent extends Vue {

}
</script>
