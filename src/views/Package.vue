<template>
<<<<<<< HEAD
  <v-container class="mx-0" fluid>
    <v-row class="d-flex justify-center">
      <v-col xs="12" sm="6" md="6" lg="6">
        <v-sheet rounded="lg" elevation="2">
          <v-card>
            <v-card-title>{{ content.title }}</v-card-title>
            <v-card-subtitle>Lorem ipsum</v-card-subtitle>
            <v-card-text>Lorem ipsum</v-card-text>
            <v-card-actions>Lorem ipsum</v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col xs="12" sm="4" md="3" lg="2">
=======
  <v-container  class="mx-0" fluid >
    <v-row class="d-flex justify-center" >
      <v-col xs="12" sm="6" md="6" lg="6"  >
        <v-card :key="idx" height="515" >
          <v-card-title>{{ content.title }}</v-card-title>
          <v-card-subtitle>Lorem ipsum</v-card-subtitle>
          <v-card-text>Lorem ipsum</v-card-text>
          <v-card-actions>Lorem ipsum</v-card-actions>
        </v-card>
      </v-col>

      <v-col xs="12" sm="4" md="3" lg="2" >
>>>>>>> develop
        <v-sheet rounded="lg" min-height="268">
          <v-card >
            <v-img height="250" src="../assets/markito.jpg"></v-img>

            <v-card-title>{{ content.author.name }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <!-- <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div> -->

              <div class="mt-4">
                {{ content.author.description }}
              </div>
            </v-card-text>
            <v-container>
              <v-row>
                <v-col class="d-flex justify-space-between">
                  <!-- class="ma-2 mt-n6" color="warning" dark -->
                  <h2>
                    <v-chip color="green lighten-3">
                      {{ content.price.toUpperCase() }}
                    </v-chip>
                  </h2>
                  <v-btn color="error"> Comprar ahora </v-btn>
                </v-col>
              </v-row>
            </v-container>

            <v-divider class="mx-4"></v-divider>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- NO TOCAR SALVO QUE SEAS ALEXIS :) -->

    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-sheet>
          <v-expansion-panels focusable>
            <v-expansion-panel
              v-for="(item, i) in content.content.length"
              :key="i"
            >
              <v-expansion-panel-header>
                {{ content.content[i].title }}
                <template v-slot:actions>
                  <v-icon color="primary"> $expand </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content style="background: #f0f8ff">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      content.content[i].description
                    }}</v-list-item-title>
                    <v-list-item-title>{{
                      content.content[i].instructions
                    }}</v-list-item-title>
                    <v-list-item-title>{{
                      content.content[i].phrase
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-text-field
                  label="Ordena las palabras para formar una frase"
                ></v-text-field>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Package",
  props: {
    content: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>
