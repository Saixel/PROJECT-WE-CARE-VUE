<template>
  <div v-if="professionals" class="pa-15">
    <div
      v-for="(professional, idx) in professionals"
      :key="idx"
      style="display: inline-block; margin: 10px"
      class="elevation-5 mx-10"
    >
      <ProfessionalCard :professional="professional"/>
    </div>
  </div>
</template>

<script>
import ProfessionalCard from "../components/ProfessionalCard";
// import userService from "@/services/userService.js";
import professionalsList from "@/assets/professionals.json";

export default {
  name: "Home",
  components: {
    ProfessionalCard,
  },
  data() {
    return {
      professionals: null,
    };
  },
  async mounted() {
    // this.professionals = await userService.getProfessionals();
    this.professionals = professionalsList
  },
};
</script>
