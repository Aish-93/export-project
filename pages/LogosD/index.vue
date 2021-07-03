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
  font-family: "Lato", sans-serif;
  font-family: "Roboto", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@400;700;900&display=swap");
</style>
<script>
import AppTestLogosd from "~/components/Test/logosd";
export default {
  components: {
    AppTestLogosd
  }
};
</script>
