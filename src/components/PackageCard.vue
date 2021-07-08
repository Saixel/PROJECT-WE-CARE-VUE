<template>
  <v-container class="mx-0" fluid>
    <v-row class="d-flex justify-center">
      <v-col xs="12" md="7" lg="6">
        <v-sheet min-height="70vh" rounded="lg" elevation="2">
          <h1>qwqqwqwqwqwqwqwqwqwqw</h1>
        </v-sheet>
      </v-col>

      <v-col xs="12" md="5" lg="3">
        <v-sheet rounded="lg" min-height="268">
          <v-card>
            <v-img height="250" src="../assets/markito.jpg"></v-img>

            <v-card-title>GRATIS - €</v-card-title>
            <v-container fluid justify="center">
              <v-row align="center" justify="center">
                <v-col class="d-flex justify-center">
                  <v-btn class="ma-2 mt-n6" color="warning" dark>
                    Añadir al carro
                  </v-btn>
                  <v-btn class="ma-2 mt-n6" color="warning" dark>
                    Comprar ahora
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
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

              <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

              <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
