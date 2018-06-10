<template id="about">
  <main>
    <h1>From idea to design to life.</h1>
    <p>I specialize in UI/UX Design and Development, helping people and companies to bring ideas to prototypes and then to code.</p>
    <p>I’m skilled at sketching, wireframing, making design patterns, interface design and prototyping. I love problem solving and simple solutions.</p>
    <p>I get excited about how technology impacts people’s life and working in teams. Also, I have a knack for learning new things quickly.</p>
    <p>You can <a class="write-link" href="mailto:kevinkonrad93@gmail.com">write to me</a> if you want to know more about how I could help you or your company.</p>
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
</style>
