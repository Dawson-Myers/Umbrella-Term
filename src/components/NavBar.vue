<script>
import { RouterView , RouterLink} from 'vue-router'
import SearchBox from './SearchBox.vue'
import DropDownMenu from './DropDownMenu.vue'

export default {
  name: 'NavBar',
  components: { RouterView, RouterLink, SearchBox, DropDownMenu },
  data() {
    return {
      appTitle: 'Umbrella Term',
    }
  },
}
</script>

<template>
  <header>
    <v-toolbar app color="#070017" darken>
      <RouterLink :to="{name: 'home'}">
        <v-toolbar-side-icon>
          <img src="./icons/umbrella-icon.png" height="64px"/>
        </v-toolbar-side-icon>
      </RouterLink>
      <RouterLink :to="{name: 'home'}">
        <v-toolbar-title class="title">{{ appTitle }}</v-toolbar-title>
      </RouterLink>
     
      <DropDownMenu />
      <SearchBox />
      <RouterLink :to="{name: 'teach'}">
        <v-btn flat color="white" >BECOME A TEACHER</v-btn>
      </RouterLink>
      <RouterLink :to="{name: 'pricing'}">
        <v-btn flat color="white" >PLANS & PRICING</v-btn>
      </RouterLink>
      <RouterLink :to="{name: 'sign-in'}">
        <v-btn flat color="white" >SIGN IN</v-btn>
      </RouterLink>
      <RouterLink :to="{name: 'create-account'}">
        <v-btn color="#ffb3de" flat >CREATE ACCOUNT</v-btn>
      </RouterLink>
      
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
v-toolbar-side-icon {
  padding-left: 3rem;
}

.v-toolbar-title {
  font-family: Pacifico;
  color: #ffb3de;
  font-size: x-large;
  padding: 1rem;
}
</style>
