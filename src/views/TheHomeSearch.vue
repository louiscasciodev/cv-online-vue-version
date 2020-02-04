<template>
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
</template>

<script>
import axios from "axios";

export default {
  name: "TheHomeSearch",
  data() {
    return {
      dataList: [],
      reposList: [],
      loaded: false,
      errored: false
    };
  },
  computed: {
    selectedRepo: {
      get: function() {
        return this.$store.state.selectedRepo;
      },
      set: function(newValue) {
        this.$store.dispatch("setSelectedRepo", newValue);
        //nom de l'action + newValue
      }
    }
  },
  methods: {
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

<style scoped>
.search-container {
  position: absolute;
  width: 100%;
  min-width: 300px;
  display: flex;
  justify-content: center;
}

.search {
  width: 40%;
  min-width: 300px;
}

@media (max-width: 600px) {
  .search-container {
    position: relative;
    width: 40vh;
  }
}
</style>