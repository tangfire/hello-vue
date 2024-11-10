<template>
    <div>{{message}}</div>
    <button class="b1" @click="increment">Count is: {{ count }}</button>
    <button class="b2" @click="increment1">Count is: {{state.count}}</button>
  </template>

  <style>
.b2{
  margin-left: 10px;
}
</style>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const count = ref(0);
      const message = ref('Hello Vue 3!');
      const state = ref(
        {
          count: 0,
          message: "Hello"
        }
      );

      function increment() {
        count.value++;
      }

      function increment1(){
        state.value.count++;
      }
  
      return { count,message,state, increment,increment1 };
    }
  }
  </script>
  