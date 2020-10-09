<template>
  <div id="wrapper1" class="wrapper">
    <div id="content1" class="content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
export default class Default1Layout extends Vue {

}
</script>

<style>

</style>
