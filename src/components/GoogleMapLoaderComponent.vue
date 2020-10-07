<template>
  <div id="map">
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

import {Loader, LoaderOptions} from 'google-maps';

@Options({})
export default class GoogleMapLoaderComponent extends Vue {

  mounted() {
    const options: LoaderOptions = {
      libraries: ["places"]
    };
    const loader = new Loader('AIzaSyBaPpk_jCFD5watww-uH5IO2XPRotmarlE', options);

    loader.load().then(function (google: any) {

      const mapElem = document.getElementById('map');
      if (mapElem) {
        const locations = [{
            "title": "ул. Васильковская, 3",
            "address": "Vasylkivska St, 3, Kyiv, Ukraine",
            "desc": "",
            "tel": "+380673202777",
            "int_tel": "",
            "email": "",
            "web": "",
            "web_formatted": "",
            "open": "",
            "time": "2104",
            "lat": 50.396033,
            "lng": 30.5061647,
            "vicinity": "Holosiivs'kyi district",
            "open_hours": "",
            "iw": {
              "address": true,
              "desc": true,
              "email": true,
              "enable": true,
              "int_tel": true,
              "open": true,
              "open_hours": true,
              "photo": true,
              "tel": true,
              "title": true,
              "web": true
            }
          },
          {
            "title": "ул. Днепровська набережная, 19-А (1 подъезд)",
            "address": "Dniprovs'ka embankment, 19А, Kyiv, Ukraine",
            "desc": "",
            "tel": "+380962050007",
            "int_tel": "",
            "email": "",
            "web": "",
            "web_formatted": "",
            "open": "",
            "time": "2104",
            "lat": 50.4076555,
            "lng": 30.6110953,
            "vicinity": "Holosiivs'kyi district",
            "open_hours": "",
            "iw": {
              "address": true,
              "desc": true,
              "email": true,
              "enable": true,
              // "int_tel": true,
              "open": true,
              // "open_hours": true,
              // "photo": true,
              "tel": true,
              "title": true,
              "web": true
            }
        }];

        const map = new google.maps.Map(mapElem, {
          center: {lat: 50.410093, lng: 30.564298},
          zoom: 13,
          gestureHandling: 'auto',
          fullscreenControl: false,
          zoomControl: true,
          disableDoubleClickZoom: false,
          mapTypeControl: false,
          scaleControl: false,
          scrollwheel: false,
          streetViewControl: true,
          draggable: true,
          clickableIcons: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        for (let  i = 0; i< locations.length; i++) {
          const loc = locations[i];
          new google.maps.Marker({
            // icon: loc.marker,
            position: new google.maps.LatLng(loc.lat, loc.lng),
            title: loc.title,
            address: loc.address,
            desc: loc.desc,
            tel: loc.tel,
            // int_tel: loc.int_tel,
            vicinity: loc.vicinity,
            open: loc.open,
            // open_hours: loc.open_hours,
            // photo: loc.photo,
            time: loc.time,
            email: loc.email,
            web: loc.web,
            iw: loc.iw,

            map,
          });
        }


      }
    });
  }
}
</script>

<style lang="scss">
#map {
  width: 100%;
  height: 500px;
}
</style>
