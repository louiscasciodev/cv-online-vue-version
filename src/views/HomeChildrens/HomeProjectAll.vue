<template>
  <div class="md-layout">
    <div v-if="dataToShow.length === 0 && loaded === true">
      <h1>Aucun projet de ce nom</h1>
    </div>
    <div v-else-if="loaded === false">
      <h1>Chargement ...</h1>
    </div>
    <div v-else-if="errored === true">
      <h1>Impossible d'afficher les repos depuis github</h1>
    </div>
    <div
      class="md-layout-item md-xlarge-size-25 md-large-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
      v-for="item in searchRepo(repos,selectedRepo)"
      :key="item.id"
    >
      <card
        :repoName="item.name"
        :repoDescription="item.description"
        :repoUpdate="getDate(item.updated_at)"
        :repoUrl="item.html_url"
      ></card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  name: "HomeProjectAll",
  components: {
    Card
  },
  data: function() {
    return {
      repos: [],
      loaded: false,
      errored: false,
      dataToShow: []
    };
  },
  computed: {
    selectedRepo() {
      return this.$store.state.selectedRepo;
    }
  },
  methods: {
    debug(data) {
      return console.log(data);
    },
    getDate(date) {
      let dateobj = new Date(`${date}`);
      const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      let result = dateobj.toLocaleDateString("fr-CA", options);
      return result;
    },
    getData() {
      axios
        .get("https://api.github.com/users/louiscasciodev/repos?sort=created")
        .then(response => {
          this.repos = response.data;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
          this.errored = true.finally(() => (this.loaded = false));
        });
    },
    searchRepo(table, word) {
      this.dataToShow = this.repos;
      if (word !== "Search") {
        // si le mot recherché n'est pas une chaine vide
        this.dataToShow = [];
        // on vide le tableau pour une nouvelle recherche
        return (this.dataToShow = table.filter(
          item => item.name.toUpperCase().match(`.*${word.toUpperCase()}.*`)
          // on compare les deux chaine mises en majuscules(pour que l'on soit sur de toujours comparer des chaines de meme type)
        ));
      } else this.dataToShow;
      //si la recherche est vide on veut afficher toutes les données dans le tableau
    }
  },
  created() {},
  mounted() {
    this.getData();
  }
};
</script>