<template>
  <v-container d-flex flex-column justify-content-center>
    <h2 class="mt-5 text-center">My vue todo App</h2>

    <!-- input  -->
    <div class="d-flex justify-content-center">
      <input  v-model="task" type="text" placeholder="Enter task" class="form-control" />
      <button  @click="submitTask" class="btn warning rounded ">SUBMIT</button>
    </div>
    <!-- table  -->
    <template>
      <v-simple-table height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Task
              </th>
              <th class="text-left">
                Status
              </th>
              <th class="text-left">
                #
              </th>
              <th class="text-left">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tasks" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.status }}</td>
              <td>
                <v-btn class="ma-2" text icon color="blue lighten-2" @click="editTask(index)">
                   Thumb up
                </v-btn>
             
              </td>
              <td>
                   <v-btn @click="deleteTask(index)">thumb down </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </v-container>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  data: function() {
    return {
      task:"",
      editedTask:null,
      tasks: [
        {
          name: "Steal Banana from the home",
          status: "To-do"
        },
        {
          name: "Eat 1kg of chocolate",
          status: "In-progress"
        }
      ]
    };
  },
  methods:{
    submitTask(){
      if(this.task.length === 0) {
         return;
      }else{

      this.tasks.push({
        name: this.task,
        status: 'To-do'
      });
      }

      this.task=" ";
    },
    deleteTask(index){
      this.tasks.splice(index,1);

    },
    editTask(index){
      this.task = this.tasks[index].name;

    }
  }
};
</script>
