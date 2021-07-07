<template>
      <ContentCard />
</template>

<script>
import ContentCard from "../components/ContentCard";
// import userService from "@/services/userService.js";

export default {
  name: "Home",
  components: {
    ContentCard,
  },
  data() {
    return {
      contents: ['hola', 'adios'],
    };
  },
  // async mounted() {
  //   this.contents = await userService.getcontents();
  // },
};
</script>
