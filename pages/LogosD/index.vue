<template>
  <div fluid class="rom">
    <app-test-logosd></app-test-logosd>
  </div>
</template>
<style lang="scss" scoped>
.rom {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
* {
  font-family: 'Montserrat', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');
</style>
<script>
import AppTestLogosd from "~/components/Test/logosd";
export default {
  components: {
    AppTestLogosd
  }
};
</script>
