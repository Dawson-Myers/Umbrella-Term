
<script>
import { RouterLink, RouterView } from 'vue-router'
import SearchBox from './SearchBox.vue'

export default {
  name: "NavBar",
  components: { RouterLink, RouterView, SearchBox }

}
</script>
<template>
<header>
  <nav class="navbar">
    <div class="container">
    <div class="logo">
      <img src="./icons/umbrella-icon.png" height="64px"/>
      <h2>Umbrella Term</h2>
    </div>
    
    <RouterLink to="/" class="">Home</RouterLink>
    <RouterLink to="/about">Explore</RouterLink>
    <RouterLink to="/resources">Teach on Umbrella</RouterLink>
    <RouterLink to="/skills">My learning</RouterLink>
    <SearchBox/>
    <div class="dropdown">
      <button class="dropbtn">Account <i class="fa-solid fa-caret-down"></i></button>
      <div class="dropdown-content">
        <RouterLink to="#">Sign in</RouterLink>
        <RouterLink to="#">Create Account</RouterLink>
        <RouterLink to="#">FAQs</RouterLink>
      </div>
    </div>
  </div>
</nav>

</header>
<RouterView />
</template>

<style scoped>


.navbar {
  width: 100%;
  background-color: #070017;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 10;
}

.container {
  max-width: auto;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
}

.logo img {
  padding: 0 1rem;
}

/* Dropdown Button */
.dropbtn {
  background-color: #731473;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3b093b;}


</style>