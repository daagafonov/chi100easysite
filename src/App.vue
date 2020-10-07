<template>
  <div class="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

const defaultLayout = "default";

@Options({
  components: {
    // Index
  }
})
export default class App extends Vue {
  get layout() {
    return `${this.$route.meta.layout || defaultLayout}-layout`;
  }
}
</script>

<style lang="scss">

</style>
