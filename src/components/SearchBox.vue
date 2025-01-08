<template>
  <div class="form-group fg--search">
    <input type="text" class="input" placeholder="Search..." v-model="searchTerm" />
    <button type="submit"><i class="fa fa-search"></i></button>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      searchTerm: '',
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.fg--search {
  background: white;
  position: relative;
  width: 30rem;
  border-radius: 2rem;
}

.fg--search input {
  width: 100%;
  padding: 20px 60px 20px 20px;
  display: block;
  border-radius: 2rem;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 18px 20px;
  z-index: 2;
  color: #070017;
}

</style>
