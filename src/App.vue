<script lang="ts">
  // Importa o componente Banner.vue
  import Banner from './components/Banner.vue';

  // Exporta o componente principal da aplicação
  export default {
    // Define os componentes utilizados no componente principal
    components: { 
      // Componente Banner que será utilizado
      Banner 
    }
  }
</script>

<template>
  <!-- Renderiza o componente Banner -->
  <Banner />

  <h1 class="titulo">

  </h1>
</template>

<style scoped>

</style>