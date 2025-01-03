<script setup>
  
</script>

<template>
    <div class="container">
      <div class="item">
        <h3>Title Here</h3>
        <img src="#">
        <p>Description</p>
      </div>
      <div class="item">
        <h3>Title Here</h3>
        <img src="#">
        <p>Description</p>
      </div>
      <div class="item">
        <h3>Title Here</h3>
        <img src="#">
        <p>Description</p>
      </div>
    </div>
</template>


<style scoped>
@media (min-width: 1024px) {
    .resources {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

.containter {
display: flex;
max-width: max-content;
}

.item {
  flex: auto;
  margin: 10px;
}

</style>
