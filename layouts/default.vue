<template>
  <v-app dark>
    
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" class="mr-3"/>
      <!-- <v-text-field
      label="Input todo"
      hide-details="auto"
      v-model="name"
    ></v-text-field> -->
         <!-- <button class="primary mt-2" @click="addTodo({
       id: Date.now(),
       text: name
     })"> add me </button> -->
      <v-spacer />
    </v-app-bar>
    <v-main>
      
        <nuxt />
      
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState , mapMutations } from 'vuex'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      name:'',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Demo Logo project'
    }
  },
  computed:{

  },
  methods:{
    ...mapMutations('todos',['addTodo'])
  },
}
</script>
