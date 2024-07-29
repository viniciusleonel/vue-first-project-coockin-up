// Importa a função obterCategoria do arquivo de requisições HTTP
// Importa o tipo ICategoria da interface ICategoria
<script lang="ts">
import { obterCategoria } from '@/http';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from '@/components/CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';

// Exporta o componente SelecionarIngredientes
export default {
    name: 'SelecionarIngredientes',
    // Inicializa o data com um array vazio de categorias do tipo ICategoria
    data() {
        return {
            categorias: [] as ICategoria[]
        }
    },
    // Função assíncrona que é executada quando o componente é criado
    async created() {
        // Atribui as categorias obtidas pela função obterCategoria ao array categorias
        this.categorias = await obterCategoria()
    },
    components: {
        CardCategoria, BotaoPrincipal
    },
    emits: ['adicionarIngrediente', 'removerIngrediente', 'buscarReceitas']
}
</script>

<template>
    <h1 class="cabecalho titulo-ingredientes">
        Ingredientes
    </h1>

    <p class="paragrafo instrucoes">
        Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
        <li v-for="categoria in categorias" :key="categoria.nome">
            <CardCategoria 
                :categoria="categoria"
                @adicionar-ingrediente="$emit('adicionarIngrediente', $event)"
                @remover-ingrediente="$emit('removerIngrediente', $event)"
            />
        </li> 
    </ul>
    <p class="paragrafo dica">
        *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <BotaoPrincipal 
        texto="Buscar receitas!" 
        @click="$emit('buscarReceitas')"
    />
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>