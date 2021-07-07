<template>
      <v-container>
        <v-row>
          <v-col cols="12" sm="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-13 elevation-4">
              <h1>Markito Doggo Navarro</h1>
              <h4 class="grey--text">
                Un perrete que aspira al puesto de docente
              </h4>
              <hr class="my-10" />
              <h3>About me</h3>
              <br />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
              <br />
              <span class="text-decoration-underline">Show more v</span>
              <hr class="my-10" />
              <h3>
                <span class="d-flex justify-center mb-10"
                  >Paquetes de actividades</span
                >
                <v-row v-for="(n, i) in 3" :key="i">
                  <v-col class="d-flex justify-center">
                    <div
                      style="
                        width: 80vw;
                        height: 40vh;
                        box-shadow: inset 4px 4px 15px -4px rgba(0, 0, 0, 0.75);
                        border-radius: 10px;
                        color: grey;
                      "
                      class="d-flex justify-center align-center"
                    >
                      actvity nº{{ n }}
                    </div>
                  </v-col>
                </v-row>
              </h3>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="3">
            <v-sheet rounded="lg" min-height="268">
              <v-card >
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="250"
                  src="https://images.uncyclomedia.co/uncyclopedia/en/thumb/3/37/WalterTheDog3.jpg/300px-WalterTheDog3.jpg"
                ></v-img>

                <v-card-title>Markito Doggo Navarro</v-card-title>

                <v-card-text>
                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-text> </v-card-text>

                
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
v-btn {
  margin: 5px;
}
</style>













<!--<template>
  <div>
     <v-container>    
      <v-row>
        <v-col class="red lighten-4 d-flex flex-column justify-end align-center">
          <h1>Markito Doggo Navarro</h1>
          <h4 class="grey--text">Un perrete que aspira al puesto de docente</h4>
        </v-col>
        <v-col col="12" class="text-center purple lighten-4 d-flex flex-column align-end">
          <v-avatar size="150">
            <img src="@/assets/walter.jpg" />
          </v-avatar>
          <v-btn color="primary">BUTTON 1</v-btn>
          <v-btn color="primary">BUTTON 2</v-btn>
          <v-btn color="primary">BUTTON 3</v-btn>
        </v-col>
      </v-row>
      <v-row class="green lighten-4 d-flex flex-column">
        <span class="font-weight-black">About me</span>
        <span style="width: 85%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </span>
        <span class="text-decoration-underline">Show more v</span>
      </v-row>
      <v-row class="yellow lighten-4">INSERT ACTIVITIES HERE</v-row>
    </v-container> -->
    
    <!-- <v-container>
      <v-row>
        <v-col cols="9">
          <v-container>
            <v-row>
              <h1>Markito Doggo Navarro</h1>
              <h4 class="grey--text">Un perrete que aspira al puesto de docente</h4>
              <hr width="100" class="mb-10">
            </v-row>
            <v-row>              
              <span class="font-weight-black">About me</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </span>
              <span class="text-decoration-underline">Show more v</span>
            </v-row>
            <v-row>
              <hr width="100" class="mb-10">
              <div v-for="(n, i) in 3" :key="i"
                style="
                  width: 20vw;
                  height: 40vh;
                  box-shadow: inset 8px 9px 36px -4px rgba(0, 0, 0, 0.75);
                  border-radius: 10px;
                  margin: 1vh
                "
                class="d-flex justify-center align-center"
              >
                actvity nº{{ n }}
              </div>              
            </v-row>
          </v-container>
        </v-col>
        <v-col class="d-flex flex-column align-center">
          <v-avatar size="150">
            <img src="@/assets/walter.jpg" />
          </v-avatar>
          <v-btn color="primary">BUTTON 1</v-btn>
          <v-btn color="primary">BUTTON 2</v-btn>
          <v-btn color="primary">BUTTON 3</v-btn>
        </v-col>
      </v-row>      
    </v-container> -->

    <!-- <v-container class="my-15">
      <v-row>
        <v-col :cols="columns">
          <v-row>
            <v-col class="d-flex justify-center" v-if="$vuetify.breakpoint.xs">
              <v-avatar size="150">
                <img src="@/assets/walter.jpg" />
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <h1>Markito Doggo Navarro</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <h4 class="grey--text">
                Un perrete que aspira al puesto de docente
              </h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <hr />
            </v-col>
          </v-row>
          <v-row>
            <v-col offset="1">
              <span class="font-weight-black">About me</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col offset="1">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum                
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col offset="1">
              <span class="text-decoration-underline"> Show more v </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <hr />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-center">
              <h3>Paquetes de actividades</h3>
            </v-col>
          </v-row> -->
          

          <!-- <v-row v-for="(package, i) in packages" :key="i">
          <v-col class="d-flex justify-center">
            <ContentCard />
          </v-col>
        </v-row> -->
          <!-- Esto de debajo es un placeholder -->


          <!-- <v-row v-for="(n, i) in 3" :key="i">
            <v-col class="d-flex justify-center">
              <div
                style="
                  width: 80vw;
                  height: 40vh;
                  box-shadow: inset 8px 9px 36px -4px rgba(0, 0, 0, 0.75);
                  border-radius: 10px;
                "
                class="d-flex justify-center align-center"
              >
                actvity nº{{ n }}
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          class="d-flex justify-center ml-15"
          v-if="$vuetify.breakpoint.lg"
        >
          <v-container>
            <v-row>
              <v-col col="12" class="text-center">
                <v-avatar size="150">
                  <img src="@/assets/walter.jpg" />
                </v-avatar>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn v-for="(n, i) in 3" :key="i" color="primary" class="my-3"
                  >Button {{ n }}</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    columns() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 12;
        case "sm":
          return 12;
        case "md":
          return 12;
        case "lg":
          return 9;
      }
      return null;
    },
  },
};
</script>

<style scoped>
  v-btn {
    margin-bottom: 5px;    
    margin-right: 10px;
  }
</style> -->