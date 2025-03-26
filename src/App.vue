<template>
  <div id="app">
    <h1>Vue Toastification Demo</h1>
    <ToastButton />
  </div>
</template>

<script>
import ToastButton from './components/ToastButton.vue'

export default {
  name: 'App',
  components: {
    ToastButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>