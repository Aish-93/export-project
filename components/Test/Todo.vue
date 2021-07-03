<template>
  <v-container>
    <div>
      <v-text-field
      label="Input todo"
      :rules="rules"
      hide-details="auto"
      v-model="name"
    ></v-text-field>
    <div class="d-flex flex-column ">
      {{ name }}
     <button class="primary mt-2" @click="addTodo({
       id: Date.now(),
       text: name
     })"> add me </button>
    <button class="success mt-2" @click="removeTodo(list[0].id)" :disabled="list.length === 0">remove me </button>
    <button class="warning mt-2"  @click="clearTodos()">remove from start</button>
    </div>
    <div>
      {{list}}
    </div>
    
    </div>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: function(){
    return{
      name:'',
    }
  },
  computed: {
    ...mapState('todos',['list'])
  },
  methods:{
    ...mapMutations('todos',[
      'addTodo',
      'clearTodos',
      'removeTodo'
    ])
  },
}
</script>