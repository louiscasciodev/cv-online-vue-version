<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-xlarge-size-25 md-large-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
      v-for="item in this.repos"
      :key="item.id"
    >
      <Card
        :repo_name="item.name"
        :repo_description="item.description"
        :repo_update="getDate(item.updated_at)"
        :repo_url="item.html_url"
      ></Card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "@/components/commons/Card.vue";

export default {
  name: "AllProjects",
  components: {
    Card
  },
  data: function() {
    return {
      repos: [],
      loaded: false,
      errored: false
    };
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
    }
  },
  created() {
  },
  mounted(){
    this.getData();
  }
};
</script>