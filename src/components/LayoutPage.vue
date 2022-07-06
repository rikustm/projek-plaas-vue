<template>
  <div class="min-h-screen bg-plaas-background">
    <div id="nav" class="flex justify-center bg-plaas-nav">
      <router-link to="/kaart">Kaart</router-link>
      <router-link to="/db">Databasis</router-link>
      <router-link to="/aankope">Nuwe Aankope</router-link>
    </div>
    <div class="container mx-auto px-2">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
#nav > a {
  @apply pt-4 pb-2 pl-4 pr-4;
}
#nav > a:hover {
  @apply bg-plaas-background;
}
</style>
