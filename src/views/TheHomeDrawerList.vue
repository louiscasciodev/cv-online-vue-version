<template>
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
</template>

<script>
export default {
  name: "TheHomeDrawerList"
};
</script>

<style scoped>
.md-list {
  margin: 8px 0;
  padding: 8px 0;
  background-color: #dfe0e0;
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
</style>