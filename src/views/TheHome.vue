<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary md-medium" md-elevation="5">
        <div class="start-search-container">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">CV en ligne</span>
        </div>

        <!-- search bar component -->
        <the-home-search></the-home-search>
        <!-- search bar component -->

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="md-toolbar-section-end">
            <md-avatar class="md-elevation-1">
              <img src="https://avatars1.githubusercontent.com/u/55145958?v=4" alt="Avatar" />
            </md-avatar>
            <span class="md-body-2">Louis Cascio</span>
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <!-- drawer list component -->
        <the-home-drawer-list></the-home-drawer-list>
        <!-- drawer list component -->
      </md-app-drawer>
      
      <md-app-content>
        <router-link to="/project/all"></router-link>
        <router-link to="/project/3"></router-link>
        <router-link to="/project/2"></router-link>
        <router-link to="/project/1"></router-link>
        <router-link to="/cv"></router-link>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import TheHomeDrawerList from "@/views/TheHomeDrawerList";
import TheHomeSearch from "@/views/TheHomeSearch";

export default {
  name: "TheHome",
  components: {
    TheHomeDrawerList,
    TheHomeSearch
  },
  data: function() {
    return {
      menuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
  min-width: 400px;
}

.md-drawer {
  width: 240px;
  min-width: 70px;
  max-width: calc(100vw - 125px);
  background-color: #dfe0e0;
}

.md-toolbar {
  min-height: 88px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.md-app-content {
  padding: 30px 8%;
}

.md-layout {
  display: flex;
  justify-content: center;
}

.md-layout-item {
  display: flex;
  justify-content: center;
  min-width: 200px;
}
</style>
