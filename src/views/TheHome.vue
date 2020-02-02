<template>
  <div class="home">
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-primary md-medium" md-elevation="5">
          <div class="start-search-container">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">CV en ligne</span>
          </div>
          <div class="search-container">
            <md-autocomplete
              class="search"
              v-model="selectedRepo"
              :md-options="reposList"
              :md-open-on-focus="false"
              md-layout="box"
            >
              <label>Search...</label>
            </md-autocomplete>
          </div>
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
import axios from "axios";

export default {
  name: "TheHome",
  data: function() {
    return {
      menuVisible: false,
      dataList: [],
      reposList: [],
      loaded: false,
      errored: false
    };
  },
  computed: {
    selectedRepo: {
      get: function() {
        return this.$store.state.selectedRepo
      },
      set: function(newValue) {
        this.$store.dispatch("setSelectedRepo", newValue);
        //nom de l'action + newValue
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    async getData() {
      await axios
        .get("https://api.github.com/users/louiscasciodev/repos")
        .then(response => {
          this.dataList = response.data;
        });
      this.getReposList();
    },
    getReposList() {
      this.dataList.map(repo => {
        return this.reposList.push(repo.name);
      });
    }
  },
  mounted() {
    this.getData();
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
  min-height: 88px;
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

.start-search-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container {
  width: 80%;
  display: flex;
  justify-content: center;
}

.search {
  max-width: 500px;
}
</style>
