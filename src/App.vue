<template>
  <header>
    <div class="wrapper">Hi there</div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/raw-html">RawHtml</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header .wrapper {
  color: #eee;
}
</style>
