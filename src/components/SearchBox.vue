<template>
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchTerm" 
        placeholder="Search..."
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBox",
    data() {
      return {
        searchTerm: '',
      }
    }
  }
  </script>
  
  <style scoped>
  .search-box {
    width: 600px; /* Initial width */
    transition: width 0.3s ease-in-out;
   
  }

  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 15px;
  }
  </style>