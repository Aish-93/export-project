<template>
  <v-container>
    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="false"
    >
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </v-container></template
>
<style lang="scss" scoped></style>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data: function() {
    return {};
  },
  components: {
    Carousel,
    Slide
  }
};
</script>
