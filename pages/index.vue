<template>
  <main class="">
    <h1 class="">
      Hi, I'm Kevin.
    </h1>
    <p>
      I'm a Designer and Frontend Developer that helps people and companies create better <span>digital products.</span>
    </p>
    <a href="/about" class="about-link">Know more about me.</a>
    <ul>
      <li class="list-item"><a href="https://twitter.com/kkhenriquez" class="list-link">Twitter</a></li>
      <li class="list-item"><a href="https://codepen.io/kkhenriquez" class="list-link">Codepen</a></li>
      <li class="list-item"><a href="https://github.com/kkhenriquez" class="list-link">Github</a></li>
      <li class="list-item"><a href="https://www.behance.net/kkhenriquez" class="list-link">Behance</a></li>
    </ul>
  </main>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
/*
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
h1 {
  margin-top: 116px;
  margin-bottom: 14px;
  font-size: 40px;
  line-height: 1.275;
}
p {
  max-width: 30em;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 1.6818;
}
p span {
  color: #ffd300;
}
.about-link {
  display: inline-block;
  margin-bottom: 24px;
  color: #BFBEB8;
  /* text-decoration: none; */
  font-size: 18px;
}
.about-link:hover {
  color: white;
}
ul {
  list-style-type: none;
  padding-left: 0px;
  font-size: 18px;
  display: flex;
}
.list-item {
  margin-bottom: 8px;
}
.list-link {
  color: #BFBEB8;
  padding-right: 16px;
}
.list-link:hover {
  color: white;
}
</style>
