<template>
  <div>
    <div v-html="this.compiledMarkdown()"></div>
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";
import DOMPurify from "dompurify"

export default {
  name: "CardReadme",
  props: {
    repoName: String
  },
  data() {
    return {
      readMe: "",
      loaded: false,
      errored: false
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
      return decodeURIComponent(escape(window.atob(this.readMe)));
    },
    compiledMarkdown() {
      const config = { FORBID_TAGS: ['h1']};
      const text = this.getContent();
      return DOMPurify.sanitize(marked(text, {
        pedantic: false,
        gfm: true,
        breaks: true,
        smartLists: true,
        smartypants: false,
        xhtml: false
      }), config);
    },
    showConsole(a) {
      console.log(a);
    }
  },
  mounted() {
    this.getReadMe(this.repoName);
  }
};
</script>