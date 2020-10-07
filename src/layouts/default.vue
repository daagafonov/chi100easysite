<template>
  <div class="wrapper" id="wrapper">
    <div id="content" class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({
})
export default class DefaultLayout extends Vue {

}
</script>

<style>

</style>
