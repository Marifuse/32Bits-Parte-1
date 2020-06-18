<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="#">32BITS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{name: 'inicio'}">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'search'}">Búsqueda</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'sales'}">Ventas</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'total'}">Total</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <img alt="Vue logo" src="./assets/logo.png">

    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Press Start 2P', cursive;
}
/* Navbar */
a {
  color: #FFF;
  padding: 1em;
}
a:visited {
  color: #FFF;
}
a:hover {
  color: rgb(255, 144, 144);
  text-decoration: none;
}
/* Imagen Cabecera */
img {
  width: 30em;
  padding: 2em;
  padding-top: 5em;
  display: block;
  margin: auto;
}
/* Animaciones */
.vista-enter-active, .vista-leave-active {
    transition: opacity .3s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
</style>
