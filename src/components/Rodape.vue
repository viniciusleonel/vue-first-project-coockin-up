<script lang="ts">
export default {}
</script>

<template>
    <footer class="rodape paragrafo">
        Desenvolvido por 
            <a 
                class="link "
                target="_blank"
                href="https://www.linkedin.com/in/viniciuslps/"
                > Vinicius Leonel 
            </a>- Projeto fictício sem fins comerciais.
    </footer>

</template>

<style scoped>
.rodape {
    background: var(--verde-escuro, #263A29);
    padding: 1.5rem 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link {
    text-decoration: none;
    color: var(--creme);
    padding: 0 5px;
}

.link:hover {
    color: var( --coral);
}

@media only screen and (max-width: 1300px) {
    .rodape {
        padding: 1.5rem 3.75rem;
    }
}

@media only screen and (max-width: 767px) {
    .rodape {
        padding: 1.5rem;
    }
}

</style>