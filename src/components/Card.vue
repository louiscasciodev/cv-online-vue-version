<template>
  <div class="card-expansion">
    <md-card>
      <md-card-header>
        <md-icon class="card-header-icon">
          <font-awesome-icon :icon="['fab', 'vuejs']" :style="{ color: 'rgb(65, 184, 131)' }" />
        </md-icon>
        <md-card-header-text>
          <div class="md-body-2">{{this.repoName}}</div>
          <div class="md-subhead">Mis à jour le {{this.repoUpdate}}</div>
        </md-card-header-text>
        <md-button :href="this.repoUrl" target="blank" class="md-icon-button" md-menu-trigger>
          <md-icon>
            <font-awesome-icon :icon="['fab', 'github-alt']" />
          </md-icon>
        </md-button>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-expand>
        <md-card-expand-content>
          <md-card-content>

            <card-readme 
            :repoName="repoName">
            </card-readme>

          </md-card-content>
        </md-card-expand-content>
        <md-card-actions md-alignment="right">
          <md-card-expand-trigger>
            <md-button>
              README
              <md-card-expand-trigger>
                <md-icon class="md-icon-button">keyboard_arrow_down</md-icon>
              </md-card-expand-trigger>
            </md-button>
          </md-card-expand-trigger>
          <md-button class="md-icon-button">
            <md-icon>star</md-icon>
          </md-button>
          <md-button class="md-icon-button">
            <md-icon>share</md-icon>
          </md-button>
        </md-card-actions>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
import CardReadme from "@/components/CardReadme.vue";

export default {
  name: "Card",
  components: {
    CardReadme
  },
  props: {
    repoName: String,
    repoDescription: String,
    repoUpdate: String,
    repoUrl: String
  }
};
</script>

<style scoped lang="scss">

.md-card {
  margin: 20px;
}

.md-card-expansion {
  width: 100%;
  padding: 0 10px;
  text-align: justify;
}

.md-card-expand{
}

.md-card-actions{
}

.md-card-content{
  max-height: 200px;
  text-align: left;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: 0.7;
}

.card-header-icon {
  margin-right: 16px;
}
</style>
