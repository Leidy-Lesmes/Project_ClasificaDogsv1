<template>
  <main>
    <px-header />
    <nav-bar />
    <!-- <card-pets /> -->
  </main>
  <router-view />
</template>

<script>
import PxHeader from "@/components/PxHeader";
import NavBar from "@/components/NavBar";
// import CardPets from "@/components/CardPets";

export default {
  name: "app",
  components: { PxHeader, NavBar },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
