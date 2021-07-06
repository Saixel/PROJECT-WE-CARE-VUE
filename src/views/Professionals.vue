<template>
  <div v-if="professionals">
    <div
      v-for="(professional, idx) in professionals"
      :key="idx"
      style="display: inline-block; margin: 10px"
    >
      <ProfessionalCard :professional="professional" />
    </div>
  </div>
</template>

<script>
import ProfessionalCard from "../components/ProfessionalCard";
import userService from "@/services/userService.js";

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
    this.professionals = await userService.getProfessionals();
  },
};
</script>
