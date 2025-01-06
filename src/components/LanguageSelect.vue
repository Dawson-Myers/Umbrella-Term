<template>
    <div class="dropdown">
        <button class="dropbtn"><i class="fa-solid fa-globe"></i></button>
        <ul class="dropdown-content" @click="MakeVisible">
          <select v-model="$i18n.locale">
          <option v-for="lang in availableLanguages" :key="lang" :value="language">
            {{ language }}
          </option>
        </select>
        </ul>
    </div>
    </template>
    
    <script>
    
    import {RouterLink} from "vue-router"

    const MakeVisible = () => {
      let element = document.getElementsByClassName(".dropdown-content");
      element.style.visibility('visible')
    }
    
    export default {
        name: "LanguageSelect",
        components: RouterLink,
      data() {
          return {
            availableLanguages: [
              {'en':'English'}, 
              {'es':'Spanish'}, 
              {'fr':'French'}, 
              {'zh':'Chinese'},
              {'ar':'Arabic'},
              {'ko':'Korean'},
              {'hi':'Hindi'},
              {'bn':'Bengali'},
              {'pt':'Portuguese'},
              {'ru':'Russian'},
              {'ur':'Urdu'}
            ], // Add more languages as needed
            MakeVisible,
          };
        },
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
      border: solid;
      padding: 0.7rem;
      border-radius: 0.7rem;
    }
    
    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
      background-color: #070017;
      display: block;
      position: absolute;
      visibility: hidden;
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
    .dropdown-content a:hover {
      background-color: #1f1b29;
      
    }
    
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
      visibility: visible;
    }
    
    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {
      background-color: #1f1b29;
      cursor: pointer;
    }
    
    </style>