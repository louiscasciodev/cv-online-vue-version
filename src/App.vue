<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    accent: md-get-palette-color(blue, A200),
    // The primary color of your application
      primary: #3B4358, // The accent or secondary color
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
