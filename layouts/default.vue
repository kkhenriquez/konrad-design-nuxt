<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  /* word-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --bg-color: #0F0F13;
  --text-color: white;
  --big-border-color: white;
}

body {
  width: 100vw;
  height: 100vh;
  color: var(--text-color);
  background-color: var(--bg-color);
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto); */
  /* display: flex;
  flex-direction: column; */
  border: 16px solid var(--big-border-color);
  padding: 16px;
}

h1 {
  font-size: 40px;
  line-height: 1.275;
}
p {
  max-width: 30em;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 1.6818;
}


@media screen and (min-width: 800px) {
  body {
    padding-left: 96px;
    border-width: 24px;
  }
  h1 {
    font-size: 56px;
  }
}
</style>
