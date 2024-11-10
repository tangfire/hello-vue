<template>
    <div>{{ fullName }}</div>
  </template>
  
  <script>
  import { reactive, computed } from 'vue';
  
  export default {
    setup() {
      const person = reactive({
        firstName: 'John',
        lastName: 'Doe'
      });
  
      const fullName = computed(() => {
        return `${person.firstName} ${person.lastName}`;
      });
  
      return { fullName };
    }
  }
  </script>
  