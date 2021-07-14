<template>
  <v-container class="d-flex flex-column justify-content-center">
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
              <td >
                <span @click="changeStatus(index)"
                 class="pointer">{{ firstchar(item.status)  }}</span></td>
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
<style lang="scss" scoped>
.pointer{
cursor: pointer;
width: 120px;
}
</style>
<script>
export default {
  data: function() {
    return {
      task:"",
      editedTask:null,
      availableStatuses: ['to-do','in-progress','finished'],

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


      }if(this.editedTask === null){
      
      this.tasks.push({
        name: this.task,
        status: 'To-do'
      });
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }

      this.task=" ";
    },
    deleteTask(index){
      this.tasks.splice(index,1);

    },
    editTask(index){
      this.task = this.tasks[index].name;
      this.editedTask = index;

    },
    changeStatus(index){
     let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if(++newIndex >2 ) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];

    },
  }
};
</script>
