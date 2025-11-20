<template>
  <ul>
    <li v-for="n in items" :key="n">Item {{ n }}</li>
  </ul>
</template>

<script>
export default {
  name: "For",
  data() {
    return {
      items: [1, 2, 3, 4, 5],
    };
  },
};
</script>
