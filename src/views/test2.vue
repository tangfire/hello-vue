<template>
    <div>{{ state.count }}</div>
    <button @click="increment">Increment</button>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const state = reactive({
        count: 0
      });
  
      function increment() {
        state.count++;
      }
  
      return { state, increment };
    }
  }
  </script>
  