<template>
    <h1>Pokemon: <span># {{ pokemonid }}</span></h1>
    <div v-if="pokemon">
        <span> {{ pokemon.name }}</span>
        <hr>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
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
           pokemon: null
        }
    },
    created() {
        //console.log(this.$route);
        //const { pokemonid } = this.$route.params; // obtener parametros de la URL
        /* this.id = pokemonid; */
        this.getPokemon();
    },
    methods: {
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.pokemonid }`).then( response => {
                    return response.json();
                })
                console.log(pokemon);
                this.pokemon = pokemon;
            } catch (error) {
                console.log(error);
                console.log(`Hay un error en la pagina de pokemonPage, entonces se redireciona al inicio`);
                this.$router.push('/');
            }
        }
    },
    watch: {
        pokemonid() {
            this.getPokemon(); 
        } 
    }
}
</script>