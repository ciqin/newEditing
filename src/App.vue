<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    let theme = localStorage.getItem('theme') ? localStorage.getItem('theme') :'light';
    this.$store.dispatch('app/toggleTheme', theme)
  },
}
</script>
