<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-image: url("./assets/background01.png") !important;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
