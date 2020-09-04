<template>
  <div class="doscg">
    <b-container class="contaniner-line">
      <h1 class="text-header">DO SCG</h1>
      <h3>
        page call api doscg send : <span> {{ items[0].description }}</span>
      </h3>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "doscg",

  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    const response = await axios.get("https://do-scg-app.herokuapp.com/doscg");
    this.items = response.data;
    console.log(this.items);
  },
};
</script>

<style scoped>
.doscg {
  text-align: center;
  height: 90vh;
  min-height: 300px;
}
.text-header {
  margin-top: 100px;
}
span {
  color: red;
}
</style>
