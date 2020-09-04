<template>
   <footer>
      <div class="inner-width">
        <div class="copyright">
          &copy; 2020 | My Personal By <a href="#">Bester Dev </a>
        </div>
        <div class="sm">
          <a
            href="https://www.facebook.com/thawatchai.kwwtn.1"
            class="fab fa-facebook-f"
          ></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin-in"></a>
          <a href="https://github.com/besterdev" class="fab fa-github"></a>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
footer {
   background: url(../assets/bg.jpg) no-repeat center;
  color: #ffffff;
  padding: 80px 0;
  text-align: center;
}
.copyright {
  margin-bottom: 20px;
  font-size: 15px;
}

.copyright a {
  font-size: 16px;
  color: #48dbfb;
  font-weight: 500;
}
</style>