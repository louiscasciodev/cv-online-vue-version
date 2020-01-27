<template>
  <div class="md-layout">
    <div>{{debug(this.repos)}}</div>
    <div
      class="md-layout-item md-xlarge-size-25 md-large-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
      v-for="item in this.repos"
      :key="item.id"
    >
      <Card
        :repo_name="item.name"
        :repo_description="item.description"
        :repo_update="item.updated_at"
        :repo_url="item.html_url"
      ></Card>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
import Card from "@/components/commons/Card.vue";

export default {
  name: "AllProjects",
  components: {
    Card
  },
  data: function() {
    return {
      loaded: false,
      repos: []
    };
  },
  methods: {
    debug(data) {
      return console.log(data);
    }
  },
  created() {
    axios
      .get("https://api.github.com/users/louiscasciodev/repos?sort=created")
      .then(response => {
        this.repos = response.data;
        this.loaded = true;
      });
  }
};
</script>