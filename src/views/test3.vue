<template>
    <div>{{count}}</div>
    <div>{{message}}</div>
</template>


<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
      message: "Hello Vue 3"
    });

    // 尝试直接结构，会导致失去响应性
    // let { count, message } = state;

    // 使用toRefs来保持响应性
    let { count, message } = toRefs(state);

    return { count, message };
  }
}

</script>