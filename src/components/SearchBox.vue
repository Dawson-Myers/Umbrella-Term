<template>
    <div class="search-box">
      <input 
        type="text" 
        v-model="searchTerm" 
        placeholder="Search..." 
        @focus="isExpanded = true" 
        @blur="isExpanded = false"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBox",
    data() {
      return {
        searchTerm: '',
        isExpanded: false
      }
    }
  }
  </script>
  
  <style scoped>
  .search-box {
    width: 200px; /* Initial width */
    transition: width 0.3s ease-in-out;
  }
  
  .search-box.expanded {
    width: 400px; /* Expanded width */
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
  }
  </style>