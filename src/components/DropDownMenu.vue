<template>
<div class="dropdown">
    <button class="dropbtn"><i class="fa-solid fa-language fa-lg"></i></button>
    <div class="dropdown-content">

    </div>
</div>
</template>

<script>

import {RouterLink} from "vue-router"

export default {
    name: "DropDownMenu",
    components: RouterLink
}

</script>

<style scoped>
/* Dropdown Button */
.dropbtn {
  background-color: #070017;
  color: #ffb3de;
  font-size: 20px;
  border: none; 
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: block;
  position: absolute;

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #ffb3de;
  padding: 12px 16px;
  text-decoration: none;
  display: none;
  position: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #070017;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #070017;
  font-size: 24px;
}

</style>