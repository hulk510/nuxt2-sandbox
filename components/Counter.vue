<script>
export default {
  name: "Counter",
  // reactive state
  data() {
    return {
      count: 0,
    };
  },

  // functions that mutate state and trigger updates
  methods: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },

  // lifecycle hooks
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script>

<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
    <button @click="reset">Reset button</button>
  </div>
</template>
