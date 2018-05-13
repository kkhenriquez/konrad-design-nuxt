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
import SocialNav from '~/components/SocialNav.vue'

export default {
  components: {
    AppLogo,
    SocialNav
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "I'm a Designer and Frontend Developer that helps people and companies create better digital products."
        }
      ]
    }
  }
}
</script>

<style>
:root {
  --bg-color: #0F0F13;
  --text-color: white;
  --big-border-color: white;
  --accent-color: #ffd300;
  --secondary-text-color: #BFBEB8;
}
h1 {
  margin-top: 116px;
  margin-bottom: 14px;
}
/* p {
  max-width: 30em;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 1.6818;
} */
p span {
  color: var(--accent-color);
}
.about-link {
  display: inline-block;
  margin-bottom: 24px;
  color: var(--secondary-text-color);
  /* text-decoration: none; */
  font-size: 18px;
}
.about-link:hover {
  color: var(--text-color);
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
  color: var(--secondary-text-color);
  padding-right: 16px;
}
.list-link:hover {
  color: var(--text-color);
}
@media screen and (min-width: 800px) {
  p {
    font-size: 28px;
    line-height: 1.6071;
  }
  .about-link {
    font-size: 22px;
  }
}
</style>
