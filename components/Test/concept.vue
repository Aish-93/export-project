<template>

</template>
<style lang="scss" scoped>

</style>
<script>
let kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
});
console.log(reformattedArray)
export default {
  
}
</script>