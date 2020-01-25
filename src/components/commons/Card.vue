<template>
  <div class="card-expansion">
    <md-card>
      <md-card-header>
        <md-icon class="card-header-icon">
          <font-awesome-icon :icon="['fab', 'vuejs']" :style="{ color: 'rgb(65, 184, 131)' }" />
        </md-icon>
        <md-card-header-text>
          <div class="md-body-2">cv-online-vue-version</div>
          <div class="md-subhead">Mis à jour le lun. 20 janv. 2020</div>
        </md-card-header-text>
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>
            <font-awesome-icon :icon="['fab', 'github-alt']" />
          </md-icon>
        </md-button>
      </md-card-header>
      <md-divider></md-divider>
      <!-- ////////////////////////////////////////////////////////////////////////// -->
      <!-- <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</md-card-content>
      <md-card-actions md-alignment="right">
          <md-button>
            README
            <md-icon>keyboard_arrow_down</md-icon>
          </md-button>
        <md-button class="md-icon-button">
          <md-icon>star</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>-->
      <!-- ////////////////////////////////////////////////////////////////////////// -->
      <md-card-expand>
        <md-card-expand-content>
          <md-card-content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.</md-card-content>
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
export default {
  name: "Card",
  props: {}
};
</script>

<style scoped lang="scss">
.md-card-expansion {
  width: 100%;
  padding: 0 10px;
  text-align: justify;
}

.md-card-expand-content {
  max-height: 172px;
}

.md-card {
  margin: 20px;
}

.card-header-icon {
  margin-right: 16px;
}
</style>
