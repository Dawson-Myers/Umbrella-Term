<template>
  <div class="container">
    <div class="item">
        <h2>Title</h2>
        <p>Image</p>
        <p>Description</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'tile'
}
</script>

<style scoped>

.container {
display: flex;
max-width: max-content;
background-color: #070017; 
border-radius: 15%;
}

.item {
  flex: auto;
  margin: 10px;
}

.container:hover {
    box-shadow: #24212b;
    box-sizing: 15%;
}
    
</style>