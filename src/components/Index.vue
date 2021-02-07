<template>
    <div>
        <video autoplay="" loop="" poster="images/clothing.jpg" id="bgvid">
            <source src="images/clothing.ogv" type="video/ogg; codecs=&quot;theora, vorbis&quot;">
            <source src="images/clothing.webm" type="video/webm">
            <source src="images/clothing.mp4" type="video/mp4">
        </video>

        <div class="page">
            <HeaderComponent/>
            <AboutComponent/>
            <ServiceComponent/>
            <ServiceQualityComponent/>
            <OrderComponent/>
            <DeliveryComponent/>
            <BotComponent2/>
            <FeedbackComponent/>
            <PricesComponent/>
            <BrandComponent/>
            <ContactComponent/>
            <FooterComponent/>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderComponent from "./HeaderComponent.vue";
import AboutComponent from "./AboutComponent.vue";
import ServiceComponent from "./ServiceComponent.vue";
import ServiceQualityComponent from "./ServiceQualityComponent.vue";
import OrderComponent from "./OrderComponent.vue";
import DeliveryComponent from "./DeliveryComponent.vue";
import FeedbackComponent from "./FeedbackComponent.vue";
import PricesComponent from "./PricesComponent.vue";
import BrandComponent from "./BrandComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BotComponent2 from "@/components/BotComponent2.vue";

@Options({
    components: {
        HeaderComponent,
        AboutComponent,
        ServiceComponent,
        ServiceQualityComponent,
        OrderComponent,
        DeliveryComponent,
        FeedbackComponent,
        PricesComponent,
        BrandComponent,
        ContactComponent,
        FooterComponent,
        BotComponent2,
    }
})
export default class Index extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
