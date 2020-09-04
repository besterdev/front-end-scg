<template>
  <div class="line-table">
     <b-table hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'line-table',
  props: {
      items: Array
  }
};
</script>

<style scoped>
</style>
