<template>
  <v-container>
    <div class="calculator">
      <div class="display">{{current || 0}}</div>
       <div class="btn" @click="clear">C</div>
      <div class="btn" @click="sign">+/-</div>
      <div class="btn" @click="percentage">%</div>
     
      <div  @click="divide" class="btn operator">/</div>
      <div class="btn" @click="append(7)">7</div>
      <div class="btn" @click="append(8)">8</div>
      <div class="btn" @click="append(9)">9</div>
      <div @click="times" class="btn operator">*</div>
      <div class="btn" @click="append(4)">4</div>
      <div class="btn" @click="append(5)">5</div>
       <div class="btn" @click="append(6)">6</div>
      <div @click="minus" class="btn operator">-</div>
       <div class="btn" @click="append(1)">1</div>
      <div class="btn" @click="append(2)">2</div>
       <div class="btn" @click="append(3)">3</div>
      <div  @click="add" class="btn operator">+</div>
      <div class="btn zero" @click="append(0)">0</div>
       <div class="btn" @click="dot">.</div>
      <div @click="equal" class="btn operator">=</div>
    </div>
  </v-container>
</template>
<style lang="scss" scoped>
.calculator{
  width:400px;
  margin: 0 auto;

  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(50px,auto);
}
*{
  text-align: center;
}

.display{
  grid-column: 1 / 5;
  text-align: center;
  color:whitesmoke;
  background-image: linear-gradient(45deg,pink,rgb(134, 243, 210));
}
.zero{
grid-column: 1/3;
}.btn{
  cursor: pointer;
  background-color: #ffff;
  border: 1px solid #333;
}
.operator{
  background-color: orange;
}
</style>
<script>
export default {
  data: function (){
    return{
      previuous:null,
      current:'',
      oprator:null,
      opratorClicked: false,
      
    }
  },
  methods:{
    clear() {
      this.current= '';
    },
    sign(){
      this.current = this.current.charAt(0) === '-' ?
      this.current.slice(1) : `-${this.current}`;

    },
    percentage(){
      this.current = `${parseFloat(this.current) / 100}` +`%`;
    },
    append(number){
      if(this.opratorClicked){
        this.current = '';
        this.opratorClicked = false;
      }
      this.current= `${this.current}${number}`;
    },
    dot(){
      if(this.current.indexOf('.') === -1){
       this.append('.');
      }
      
    },
    setPrevious(){
    this.previuous = this.current;
       this.opratorClicked = true;
    },
    divide(){
      this.oprator = (a,b) => a / b; 
      this.setPrevious();
      
    },
    times(){
      this.oprator = (a,b) => a * b;
     this.setPrevious();;
    },
    add(){
      this.oprator = (a,b) => a + b;
      this.setPrevious();
    },
    minus(){
      this.oprator = (a,b) =>  a - b;
      this.setPrevious();

    },
     equal(){
          this.current = `${this.oprator(
            parseFloat(this.current),
            parseFloat(this.previuous)
          )}`;

          this.previuous = null;
     },
  }
}
</script>