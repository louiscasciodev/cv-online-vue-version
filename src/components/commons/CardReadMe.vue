<template>
  <vue-markdown>{{getContent(this.readMe.content)}}</vue-markdown>
</template>

<script>
import axios from "axios";
import VueMarkdown from 'vue-markdown'

export default {
  name: "CardReadMe",
    components: {
    VueMarkdown
  },
  props: {
    repo_name: String
  },
  data: function() {
    return {
      readMe: [],
      loaded: false,
      errored: false
    };
  },
  methods: {
    getReadMe(repoName) {
      axios
        .get(`https://api.github.com/repos/louiscasciodev/${repoName}/readme`)
        .then(response => {
          this.readMe = response.data;
          this.loaded = true;
        })
        .catch(error => {
          console.log(error);
          this.errored = true.finally(() => (this.loaded = false));
        });
    },
    getContent(content) {
      const result = atob(content);
      return result;
    },
    showReadMe() {
      console.log(this.readMe);
    }
    // supprH1(el){
    //   el = el.textContent
    //   el = el.getElementsByTagName("h1").replace = ""
    // },
    // postrender(sourceData) {
    //   return this.supprH1(sourceData)
    // }
  },
  mounted() {
    this.getReadMe(this.repo_name);
    this.showReadMe();
  }
};
</script>