<template>
  <div>
    <b-navbar type="dark" variant="dark" class="nav-bar">
      <b-navbar-nav class="inner-width">
        <b-nav-item href="#">
          <router-link id="link-li" to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link id="link-li" to="/doscg">Doscg</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link id="link-li" to="/cv">Cv</router-link>
        </b-nav-item>
        <b-nav-item href="#">
          <router-link id="link-li" to="/linemessage">Linemessage</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  background-color: #353b48;
  width: 100%;
  z-index: 999;
}

#link-li {
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-left: 30px;
  transition: 0.2s linear;
}
#link-li:hover {
  color: #48dbfb;
  border-bottom: 2px solid #48dbfb;
  padding-bottom: 0.5rem;
  text-decoration: none;
}
</style>
