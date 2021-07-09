<template>
  <v-app-bar color="primary lighten-1" dark app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>WE CARE</v-toolbar-title>

    <v-btn
      v-for="link in links"
      :key="link"
      color="white"
      text
      rounded
      class="my-2"
    >
      <router-link :to="{ name: link }">{{ link }}</router-link>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "News", "Contents", "Professionals"],
  }),
};
</script>

<style lang="scss" scoped>
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: inherit;
}
</style>
