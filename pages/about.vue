<template id="about">
  <main>
    <h1>From idea to design to life.</h1>
    <p>My name is <span class="fw7">Kevin Konrad Henriquez</span>. I’m currently living in Santiago, Chile. My favorite things are knowing new places and learning about new topics.</p>
    <p>I consider myself as a <span class="fw7">UX Designer / Developer</span> — Bridging the gap between design and development.</p>
    <p>I’m skilled at sketching, wireframing, making design patterns, <span class="fw7">interface design</span> and <span class="fw7">prototyping</span>. I love solving problems and simple solutions. I get excited about how technology impacts people’s lives and working with other people. Also, I have a knack for learning new things quickly.</p>
    <p>I’m interested in maps, mythology and architecture. I like video games, tv, film and desserts.</p>
    <p>You can <a class="write-link" href="mailto:kevinkonrad93@gmail.com">write to me</a> if you want to know more about me or if you just want to chat.</p>
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
          content: "I'm a Designer and Frontend Developer skilled at wireframing, prototyping and interface design."
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
  margin-top: 32px;
  margin-bottom: 18px;
}
p {
  font-size: 18px;
  line-height: 1.5;
}
.write-link {
  color: var(--secondary-text-color);
}
.write-link:hover {
  color: var(--text-color);
}
.fw7 {
  font-weight: 700;
}
</style>
