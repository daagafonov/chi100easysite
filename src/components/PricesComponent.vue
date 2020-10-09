<template>
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
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class PricesComponent extends Vue {

}
</script>
