<template>
  <v-container v-if="professionals">
    <v-row>
      <v-col
        v-for="(professional, idx) in professionals"
        :key="idx"
        sm="6"
        lg="4"
      >
        <ProfessionalCard
          :professional="professional"
          height="200"
          class="elevation-5"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfessionalCard from "../components/ProfessionalCard";
import userService from "@/services/userService.js";
// import professionalsList from "@/assets/professionals.json";

export default {
  name: "Professionals",
  components: {
    ProfessionalCard,
  },
  data() {
    return {
      professionals: null,
    };
  },
  async mounted() {
    this.professionals = await userService.getProfessionals();
    // this.professionals = professionalsList
  },
};
</script>
