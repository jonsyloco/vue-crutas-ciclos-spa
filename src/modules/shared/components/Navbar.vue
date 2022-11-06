<template>
  <div>
    <!-- Manera antigua de manejar las rutas -->
    <!--  <router-link :to="{name: 'home'}">Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params: {pokemonid: 85} }">Pokemon por id</router-link>
        <router-link :to="{name: 'about'}">About</router-link> -->
    <custom-link 
        v-for="link in links" 
        :key="link.to"
        :link="link"
    ></custom-link>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    CustomLink: defineAsyncComponent(() =>
      import(/*webpackChunkName: "CustomLink" */ "./CustomLink.vue")
    ) /*hacer carga peresoza de componente */,
  },
  data() {
    return {
      links: [
        { to: "/home", name: "pokemons" },
        { to: "/pokemonid/50", name: "por ID " },
        { to: "/about", name: "About " },
        { to: "https://google.com", name: "Google " },
      ],
    };
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
div .router-link-exact-active {
  color: #42b983;
}
</style>