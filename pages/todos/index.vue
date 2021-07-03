<template>
  <v-container>
    <app-test-todo></app-test-todo>
    <app-test-new></app-test-new>
  </v-container>
</template>
<style lang="sass" scoped></style>
<script>
import AppTestTodo from "~/components/Test/Todo";
import AppTestNew from "~/components/Test/New";
export default {
  components: {
    AppTestTodo,
    AppTestNew
  }
};
</script>
