
<script>
import { RouterLink, RouterView } from 'vue-router'
import SearchBox from './SearchBox.vue'
import DropDownMenu from './DropDownMenu.vue'

export default {
  name: "NavBar",
  components: { RouterLink, RouterView, SearchBox, DropDownMenu }

}
</script>
<template>
<header>
  <nav class="navbar">
    <div class="container">
    <div class="logo">
      <RouterLink to="/">
      <img src="./icons/umbrella-icon.png" height="64px"/>
      </RouterLink>
      <h2>Umbrella Term</h2>
      
      
    </div>
    
    <RouterLink to="/explore" class="nav_menu_hover">Explore</RouterLink>
    <SearchBox/>
    <RouterLink to="/teaching" class="nav_menu_hover">Teach on Umbrella</RouterLink>
    <RouterLink to="/pricing" class="nav_menu_hover">Plans & Pricing</RouterLink>
    
    <DropDownMenu/>
  </div>
</nav>

</header>
<RouterView />
</template>

<style scoped>


.navbar {
  width: 100%;
  background-color: #070017;
  padding: 15px;
  position: Fixed;
  top: 0;
  z-index: 1;
}

.container {
  max-width: auto;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.logo {
  display: flex;
}

.logo img {
  padding: 0 1rem;
}

</style>