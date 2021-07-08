<template>
  <v-card :loading="loading" class="mx-auto my-12 rounded-lg" max-width="374">
    <v-card-title>Ficha: Autismo (Lvl.1)</v-card-title>
    <v-card-subtitle>Markito Navarro</v-card-subtitle>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <div>
        En este pack de 9 fichas encontraremos conductas y actitudes a la hora
        de interactuar con los usuarios que sufren autismo.
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Learn More
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="teal accent-6"
        ><router-link
          :to="{ name: 'Package' }"
          style="text-decoration: none; color: inherit"
          >Ir a la ficha</router-link
        ></v-btn
      >
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-list-item class="d-flex">
          <v-list-item-content class="align-self-start pt-4">
            <h2>Markito Marrero</h2>
            <h4 class="grey--text">-Luchar es el primer paso al triunfo-</h4>
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey">
            <v-img src="../assets/markito.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <p>Me gusta comer perros (ئۇزۇن ئۆمۈر كۆرىدىغان شەيتانلار).</p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="teal accent-4" @click="reveal = false">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="teal accent-6">Ir al profesional</v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "ContentCard",
  data: () => ({
    loading: false,
    selection: 1,
    reveal: false,
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    props: {
      content: Object,
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
