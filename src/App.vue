<template>
  <div id="app">
    <router-link to="/"></router-link>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
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

////////////////////////////Transitions////////////////////////////
/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    accent: md-get-palette-color(blue, A200),
    // The primary color of your application
      primary: #3b4358,
    // The accent or secondary color
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
