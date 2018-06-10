<template>
  <main class="">
    <h1 class="">
      Hi, I'm Kevin.
    </h1>
    <p>
      I'm a Designer and Frontend Developer that helps people and companies create better <span>digital products.</span>
    </p>
    <a href="/about" class="about-link">Know more about me.</a>
    <SocialNav/>
  </main>
</template>

<script>
import SocialNav from '~/components/SocialNav.vue'

export default {
  components: {
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
  --big-border-color: white;
  --accent-color: #ffd300;
  --secondary-text-color: #bfbeb8;
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
