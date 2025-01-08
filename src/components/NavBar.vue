
<script>
import { RouterLink, RouterView } from 'vue-router'
import SearchBox from './SearchBox.vue'
import DropDownMenu from './DropDownMenu.vue';

export default {
  name: "NavBar",
  components: { RouterLink, RouterView, SearchBox, DropDownMenu, },
  data() {
    return {
      appTitle: 'Umbrella Term',
    }
  }

}
</script>

<template>
  <header>
    <v-toolbar app color="#070017" darken>
      <v-toolbar-side-icon><img src="./icons/umbrella-icon.png" height="64px"/></v-toolbar-side-icon>
      <v-toolbar-title class="title">Umbrella Term</v-toolbar-title>
        <DropDownMenu/>
        <SearchBox/>
        <v-btn flat :to="{name: 'teach'}">BECOME A TEACHER</v-btn>
        <v-btn flat :to="{name: 'pricing'}">PLANS & PRICING</v-btn>
        <v-btn flat :to="{name: 'sign-in'}">SIGN IN</v-btn>
        <v-btn color="#ffb3de" flat :to="{name: 'create-account'}">CREATE ACCOUNT</v-btn>
    </v-toolbar>
  </header>
<RouterView />
</template>

<style scoped>
 .v-toolbar {
  width: 100%;
  background-color: #070017;
  padding: 1rem;
  position: Fixed;
  top: 0;
  z-index: 1;
  max-width: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.v-toolbar-title {
  font-family: Pacifico;
  color: #ffb3de;
  font-size: x-large;

}

</style>