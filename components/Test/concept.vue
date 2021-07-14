<template>
<div>
  
<!-- <v-col v-for="(temp,index) in data" :key="index" >
   {{temp.value }}, {{ finds() }}, {{ temp.key }}
   {{ filter( beta )}}
  
</v-col> -->
<v-col v-for="(temp,index) in data" :key="index">
{{ filter2(beta,x=> x > 10) }}
</v-col>

</div>
</template>
<style lang="scss" scoped>

</style>
<script>


let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value;
   // rObj.num = obj.value;
   rObj['num'] = obj.value;
   //{1:10}
   return rObj
});
console.log(reformattedArray)





export default {
   data: () => ({
  data:[{key:1, value: 10},
  {
   key:2, value:200
  },
  {key:3,value:300},],
beta:[1,2,3,45,5,6,78,32,90,99],


}),
methods:{
   
   finds() { 
      // let bum = this.beta.find(ele => ele > 10);
      for (let i = 0; i <  this.beta.length ; i++ ){
          if (this.beta[i] > 10 ){
             return (this.beta[i]);
          }
      };
     
   },
   filter(arr) {
   // returns new array  with elementsfor which cb returns true. cb(arrayElement) === true
   let bums = [];
   for(let i = 0; i < arr.length; i++){
         if (arr[i] > 10 ){
            bums.push( arr[i] )
         }

         // bums.push( arr[i] > 10 )

   }
   return bums ;
   
},

filter2(arr,fun){
   let bums = [];
   for (let i = 0; i < arr.length ; i++){
      if (fun){
         bums.push(arr[i])
         i++
      }
   }
   return bums;
}
}


  
}
</script>