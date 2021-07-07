<template>
  <v-container class="my-15">
    <v-row>
      <v-col class="d-flex justify-center">
        <v-avatar size="150">
          <img src="@/assets/walter.jpg">
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
        <h4 class="grey--text">Un perrete que aspira al puesto de docente</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <hr>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="1">
        <span class="text-decoration-underline">
          Show more v
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <hr>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <h3>Paquetes de actividades</h3>
      </v-col>
    </v-row>
    <!-- <v-row v-for="(package, i) in packages" :key="i">
      <v-col class="d-flex justify-center">
        <ContentCard />
      </v-col>
    </v-row> -->
    <!-- Esto de debajo es un placeholder -->
    <v-row v-for="(n, i) in 3" :key="i">
      <v-col class="d-flex justify-center">
        <div style="width: 80vw; height: 40vh; box-shadow: inset 8px 9px 36px -4px rgba(0,0,0,0.75); border-radius: 10px" class="d-flex justify-center align-center">actvity nº{{n}}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>

</style>