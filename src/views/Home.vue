<template>
  <div class="home">
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-primary" md-elevation="5">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
          <span class="md-title">CV en ligne</span>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
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

          <md-list>
            <md-subheader class="md-inset">Projets</md-subheader>

            <md-divider class="md-inset"></md-divider>

            <md-list-item to="/project/all" exact>
              <md-icon>list</md-icon>
              <span class="md-list-item-text">Tous</span>
            </md-list-item>

            <md-list-item to="/project/3" exact>
              <md-icon>filter_3</md-icon>
              <span class="md-list-item-text">Projet 3</span>
            </md-list-item>

            <md-list-item to="/project/2" exact>
              <md-icon>filter_2</md-icon>
              <span class="md-list-item-text">Projet 2</span>
            </md-list-item>

            <md-list-item to="/project/1" exact>
              <md-icon>filter_1</md-icon>
              <span class="md-list-item-text">Projet 1</span>
            </md-list-item>

            <md-subheader class="md-inset">Téléchargements</md-subheader>

            <md-divider class="md-inset"></md-divider>

            <md-list-item to="/cv" exact>
              <md-icon>attachment</md-icon>
              <span class="md-list-item-text">Curriculum vitæ</span>
            </md-list-item>
          </md-list>
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
  </div>
</template>

<script>

export default {
  name: "home",
  data: () => ({
    menuVisible: false
  }),
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

.md-list {
  margin: 8px 0;
  padding: 8px 0;
  background-color: #dfe0e0;
}

.md-toolbar {
  height: 64px;
  min-height: 64px;
  padding: 0 16px;
}

.md-toolbar {
  height: 64px;
  min-height: 64px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

li a span {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.6);
}

.md-subheader {
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.54);
}

.md-app-content {
  padding: 30px 10%;
}

.md-layout {
  display: flex;
  justify-content: center;
}

.md-layout-item {
  display: flex;
  justify-content: center;
}
</style>
