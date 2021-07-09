<template>
  <v-container class="mx-0" fluid>
    <v-row class="d-flex justify-center">
      <v-col xs="12" sm="6">
        <v-card height="420">
          <v-card-title style="background: #f0f8ff"
            ><strong>{{ content.title }}</strong></v-card-title
          >
          <v-divider></v-divider>
          <v-card-text>
            <div class="text--primary">
              {{ content.description }}
            </div>
          </v-card-text>
          <v-card-text
            >Espacio reservado para contenido adicional e indicaciones del
            profesional.</v-card-text
          >
        </v-card>
      </v-col>

      <v-col xs="12" sm="4" md="3" lg="2">
        <!-- <v-sheet rounded="lg" min-height="268"> -->
        <v-card height="420">
          <v-img height="280" src="../assets/alexprofile1.jpg"></v-img>
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

            <!-- <div class="mt-4">
              {{ content.author.description }}
            </div> -->
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-container>
            <v-row>
              <v-col class="d-flex justify-space-between">
                <!-- class="ma-2 mt-n6" color="warning" dark -->
                <h2>
                  <v-chip color="green lighten-3">
                    {{ content.price.toUpperCase() }}
                  </v-chip>
                </h2>
                <v-btn color="primary">Comprar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <!-- </v-sheet> -->
      </v-col>
    </v-row>

    <!-- NO TOCAR SALVO QUE SEAS ALEXIS :) -->

    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-sheet>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(item, i) in content.content.length"
              :key="i"
              style="background: #f0f8ff"
            >
              <v-expansion-panel-header>
                {{ content.content[i].title }}
                <template v-slot:actions>
                  <v-icon color="primary"> $expand </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content style="background: white">
                {{ content.content[i].instructions }}
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-chip color="blue lighten-3" class="mr-3"
                        ><strong>tres</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>gallina</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>puso</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>La</strong></v-chip
                      >
                      <v-chip color="blue lighten-3" class="mr-2"
                        ><strong>huevos</strong></v-chip
                      >
                      <!-- <v-chip
                        v-for="(word, n) in content.content[i].pieces"
                        :key="n"
                      >
                        {{ content.content[i].pieces[n] }}
                      </v-chip> -->
                    </v-list-item-title>
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

<style lang="scss" scoped></style>
