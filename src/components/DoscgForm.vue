<template>
  <div id="doscg-form">
    <form @submit.prevent="handleSubmit">
      <label>Title doscg</label>
      <input v-model="employee.id" type="text" />
      <input v-model="employee.title" type="text" />
      <button>Add Doscg</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "doscg-form",
  data() {
    return {
      employee: {
        id: "",
        title: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("add:employee", this.employee);
    },
  },
};
</script>

<style></style>
