<template>
  <div>

    <h1 class="active">{{hello}}</h1>

    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-arrow-right"
    >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</div>
</template>

<!-- <template>
  <h1>Arrow Component</h1>
</template> -->

<script>
export default {
  name: 'Arrow',
  data() {
    return {
      hello: 'Hello Arrow Component!'
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
