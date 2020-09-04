<template>
  <div id="cv">
    <section class="home" id="home">
      <div class="inner-width">
        <div class="content">
          <h1 class="typed-text">
            My
            <span id="typed">CV</span>
          </h1>
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
          <div class="buttons">
            <a href="#contact" class="btnme" id="btnme">Contact me</a>
            <a
              href="https://drive.google.com/file/d/1GTnEAV4MxKYiDCaUeLeiafPSQKoPT-7x/view?usp=sharing"
              >My resume</a
            >
          </div>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <b-container class="ml-auto p-3">
        <b-row>
          <div class="inner-width">
            <h1 class="section-title">About</h1>

            <b-container>
              <b-row>
                <b-card no-body class="ml-auto p-3" style="width: auto">
                  <b-row no-gutters>
                    <b-col md="6">
                      <div class="mb-2">
                        <b-avatar
                          src="https://placekitten.com/300/300"
                          size="14rem"
                        ></b-avatar>
                      </div>
                    </b-col>
                    <b-col md="6">
                      <b-card-body title="Hi I'm Thawatchai">
                        <b-card-text>
                          I am developer with building web sites and
                          web-application based on web standard technology
                          HTML5, CSS, JavaScript. I have experience in web
                          design and graphic design. I enjoy develop and design
                          web application for user have good experience in most
                          use.
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-row>
            </b-container>

            <div class="skills">
              <div class="skill-programming">
                <h2>Programming</h2>
                <div class="skill">
                  <div class="skill-info">
                    <i class="fab fa-html5"></i>
                  </div>
                  <div class="skill-info">
                    <i class="fab fa-css3-alt"></i>
                  </div>
                  <div class="skill-info">
                    <i class="fab fa-js-square"></i>
                  </div>
                </div>
              </div>

              <div class="skill-front-end">
                <h2>FRONT-END</h2>
                <div class="skill">
                  <div class="skill-info">
                    <i class="fab fa-react"></i>
                  </div>
                  <div class="skill-info">
                    <i class="fab fa-bootstrap"></i>
                  </div>
                </div>
              </div>

              <div class="skill-back-end">
                <h2>BACK-END</h2>
                <div class="skill">
                  <div class="skill-info">
                    <i class="fab fa-php"></i>
                  </div>
                  <div class="skill-info">
                    <i class="fab fa-node"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>

    <section id="services" class="dark">
      <b-container>
        <b-row>
          <div class="inner-width">
            <h1 class="section-title">skills</h1>
            <div class="services">
              <div class="service">
                <i class="icon fas fa-paint-brush"></i>
                <h4>Desgin</h4>
                <p>
                  Design the work piece to be beautiful and easily understood.
                </p>
              </div>
              <div class="service">
                <i class="icon fas fa-pager"></i>
                <h4>Build Websites</h4>
                <p>develop websites effectively.</p>
              </div>
              <div class="service">
                <i class="icon fas fa-database"></i>
                <h4>Manage Databases</h4>
                <p>Database design for connection back-end.</p>
              </div>
              <div class="service">
                <i class="icon fas fa-mobile"></i>
                <h4>Build Responsive</h4>
                <p>Develop websites to support multiple devices.</p>
              </div>
              <div class="service">
                <i class="icon fas fa-credit-card"></i>
                <h4>Ui Design</h4>
                <p>
                  Analyze design work pieces that should be used and easy to
                  use.
                </p>
              </div>
              <div class="service">
                <i class="icon fas fa-keyboard"></i>
                <h4>Edit Texts</h4>
                <p>Edit text to make it easier to understand.</p>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>

    <section id="education">
      <b-container>
        <b-row>
          <div class="inner-width">
            <h1 class="section-title">Education & Experiences</h1>
            <div class="time-line">
              <div class="block">
                <h4>
                  Valeo comfort and driving assistance system (thailand) limited
                  2019 - 2020 (10 mount)
                </h4>
                <h3>Vps student trainee</h3>
                <p>
                  Analysis problem process in line production for improvement
                  product and develop web application support work production by
                  using HTML, CSS, JavaScript, php, Google AppScript, MySql
                </p>
              </div>

              <div class="block">
                <h4>Konk production company 2017 (1 mount)</h4>
                <h3>graphic design assistant</h3>
                <p>Created and design promotion by using photoshop</p>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  padding: 100px 0;
  background-color: #f1f1f1;
}

#typed {
    color: #48dbfb;
}
.home {
  position: relative;
  height: 95vh;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  background-position: center;
}

.home .inner-width {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}

.home .content {
  position: relative;
  z-index: 10;
  width: 100%;
  color: #fff;
}

.home .content h1 {
  font-size: 60px;
  margin-bottom: 60px;
}

.sm a {
  color: #fff;
  font-size: 22px;
  margin: 0 10px;
  transition: 0.2s linear;
}

.sm a:hover {
  color: #48dbfb;
  text-decoration: none;
}

.home .buttons {
  margin-top: 60px;
}

.home .buttons a {
  display: inline-block;
  margin: 15px 30px;
  color: #48dbfb;
  font-size: 15px;
  font-weight: 500;
  width: 180px;
  border: 1px solid;
  padding: 14px 0;
  border-radius: 7px;
  transition: 0.2s linear;
}

.home .buttons a:hover,
.home .buttons a:nth-child(2) {
  background-color: #48dbfb;
  text-decoration: none;
  color: #fff;
}

.section-title {
  position: relative;
  margin-bottom: 50px;
  padding-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 26px;
  color: #000;
}

.about-content {
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 9px 9px 18px #caccce, -9px -9px 18px #eef0f2;
}

.about-pic {
  width: 200px;
  margin-right: 20px;
  background-color: #fff;
  border-radius: 50%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.about-text {
  flex: 1;
}

.about-text h3 {
  margin: 10px 0;
  color: #444;
  font-size: 16px;
}

.about-text p {
  font-size: 18px;
  text-align: justify;
  line-height: 26px;
  margin-top: 20px;
  margin-right: 20px;
}

.skills {
  display: flex;
  margin-top: 60px;
  padding: 0 10px;
  justify-content: space-between;
  text-align: center;
}

.skill {
  margin-top: 100px;
  display: flex;
  position: relative;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
}

.skill-info {
  display: inline-block;
  width: 90px;
  height: 90px;
  background: #ffffff;
  margin: 10px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: #3498db;
  overflow: hidden;
  position: relative;
}

.skill-info i {
  line-height: 90px;
  font-size: 35px;
  transition: 0.2s linear;
  color: #48dbfb;
}

.skill-info:hover i {
  transform: scale(1.5);
  color: #f1f1f1;
}

.skill-info::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: #48dbfb;
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}

.skill-info:hover::before {
  animation: aaa 0.7s 1;
  top: -10%;
  left: -10%;
}

@keyframes aaa {
  0% {
    left: -110%;
    top: 90%;
  }
  50% {
    left: 10%;
    top: -30%;
  }
  100% {
    top: -10%;
    left: -10%;
  }
}

#overflow-hidden {
  display: flex;
  justify-content: center;
}

section.dark {
  background-color: #353b48;
}

section.dark .section-title {
  color: #ffffff;
}

section.dark .section-title::before {
  background-color: #ffffff;
}

section.dark .section-title::after {
  border: 4px solid #353b48;
}

.services {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.service {
  width: calc(33% - 20px);
  text-align: center;
  border: 1px solid #48dbfb;
  border-radius: 6px;
  margin: 20px 0;
  padding: 40px 20px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s linear;
}

.service .icon {
  color: #48dbfb;
  font-size: 40px;
  margin-bottom: 20px;
  transition: 0.3s linear;
}

.service h4 {
  font-size: 16px;
  margin-bottom: 6px;
}

.service:hover {
  background-color: #48dbfb;
}

.service:hover .icon {
  color: #ffffff;
}
.time-line {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.block {
  position: relative;
  width: calc(50% - 20px);
  background-color: #ffffff;
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 30px;
}

.block::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 120%;
  background-color: #ddd;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
}

.block::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #48dbfb;
  left: -28px;
  top: 30px;
  border-radius: 50%;
}
.block h3 {
  font-size: 16px;
  margin: 10px 0;
}

.block p {
  font-size: 15px;
  color: #444;
}
</style>
