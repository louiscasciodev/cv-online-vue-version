<template>
  <div>
     <div v-html="this.compiledMarkdown()"></div>
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";

export default {
  name: "CardReadMe",
  props: {
    repo_name: String
  },
  data() {
    return {
      readMe: "",
      loaded: false,
      errored: false,
      text: "",
      parsed: ""
    };
  },
  methods: {
    getReadMe(repoName) {
      axios
        .get(`https://api.github.com/repos/louiscasciodev/${repoName}/readme`)
        .then(response => {
          this.readMe = response.data.content;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
          this.errored = true.finally(() => (this.loaded = false));
        });
    },
    getContent() {
      return window.atob(this.readMe);
    },
    compiledMarkdown() {
      let a = this.getContent()
      return marked(a, { sanitize: true });
    },
    showConsole(a) {
      console.log(a);
    }
  },
  mounted() {
    this.getReadMe(this.repo_name);
  }
};
</script>