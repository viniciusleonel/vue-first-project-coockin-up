<script lang="ts">
// Importa o componente Banner.vue
import Banner from './components/Banner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
import Rodape from './components/Rodape.vue';

// Exporta o componente principal da aplicação
export default {
  // Define os componentes utilizados no componente principal
  components: {
    // Componente Banner que será utilizado
    Banner, ConteudoPrincipal, Rodape
  }
}
</script>

<template>
  <!-- Renderiza o componente Banner -->
  <Banner />
  <ConteudoPrincipal />
  <Rodape />
</template>

<style scoped></style>