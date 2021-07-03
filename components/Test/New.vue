<template>
  <v-container class="mt-8">
    <div>
      <v-row class="mb-5">
        <v-text-field
          label="Input todo"
          :rules="rules"
          hide-details="auto"
          v-model="name"
        ></v-text-field>
      </v-row>
      <v-row align="center" justify="space-around">
        <v-btn
          depressed
          @click="
            addTodo({
              id: Date.now(),
              text: name
            })
          "
        >
          Add me
        </v-btn>
        <div class="">{{ name }}</div>
        <v-btn
          depressed
          color="primary"
          @click="removeTodo(list[1].id)"
          :disabled="list.length <= 1"
        >
          remove me
        </v-btn>
        <v-btn depressed color="error"
        @click="clearTodos()">
          Null me
        </v-btn>
        <v-btn depressed color="success"
        @click="removeMe()">
          Remove from start
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: function() {
    return {
      name: ""
    };
  },

  computed: {
    ...mapState("todos", ["list"])
  },
  methods: {
    ...mapMutations("todos", ["addTodo", "removeTodo", "clearTodos","removeMe"])
  }
};
</script>
