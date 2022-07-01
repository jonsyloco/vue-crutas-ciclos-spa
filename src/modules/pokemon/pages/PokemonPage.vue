<template>
    <h1>Pokemon: <span># {{ pokemonid }}</span></h1>
</template>

<script>
export default {
    props: {
        pokemonid: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
           /*  id: null */
        }
    },
    created() {
        console.log(this.$route);
        const { pokemonid } = this.$route.params; // obtener parametros de la URL
        /* this.id = pokemonid; */
    },
}
</script>