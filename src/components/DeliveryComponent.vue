<template>
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
                            <span> В УДОБНОЕ </span><span> МЕСТО </span>
                        </div>
                    </div>
                    <div class="comfortable-time">
                        <div class="comfortable-icon">
                            <img src="images/clock.png" alt="">
                        </div>
                        <div class="comfortable-name">
                            <span> В УДОБНОЕ </span>
                            <span> ВРЕМЯ </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class DeliveryComponent extends Vue {

}
</script>
