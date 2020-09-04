<template>
  <div id="app">
    <Header />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
}

html {
  scroll-behavior: smooth;
}

::selection {
  background-color: #48dbfb60;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #353b48;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>
