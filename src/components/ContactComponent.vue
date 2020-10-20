<template>
    <div class="contacts" id="contact">
        <div class="contacts-title">
            КОНТАКТЫ
        </div>
        <div class="contacts-description">
            <p class="">
                ул. Васильковская, 3 - Тел: +380673202777 <br/>
                ул. Ульяны Громовой, 5 - Тел: +380962050007 <br/>
                Email: info@chystoprosto.com
            </p>
        </div>
        <div class="contacts-map">
            <GoogleMapLoaderComponent></GoogleMapLoaderComponent>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GoogleMapLoaderComponent from "./GoogleMapLoaderComponent.vue";

@Options({
    components: {
        GoogleMapLoaderComponent,
    }
})
export default class ContactComponent extends Vue {

}
</script>
