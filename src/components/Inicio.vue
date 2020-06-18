<template>
    <div>
        <header>
            <h1 class="title-store">32BITS</h1>
            <h2 class="subtitle-store">Los Mejores Juegos de PC y Consolas están aquí</h2>
        </header> 
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: mapState['products']
}
</script>

<style>
    .title-store, .subtitle-store {
        text-align: center;
        padding: 1em;
    }

</style>
