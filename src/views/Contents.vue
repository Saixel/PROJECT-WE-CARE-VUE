<template>
  <v-container v-if="contents">
    <v-row>
      <v-col v-for="(content, idx) in contents" :key="idx" sm="6" lg="4">
        <ContentCard :content="content" height="200" class="elevation-5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentCard from "../components/ContentCard";
import contentService from "@/services/contentService.js";

export default {
  name: "Contents",
  components: {
    ContentCard,
  },
  data() {
    return {
      contents: null,
    };
  },
  async mounted() {
    this.contents = await contentService.getPackages();
  },
};
</script>
