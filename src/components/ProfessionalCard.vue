<template>
  <v-card class="mx-auto" max-width="400" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">PROFESSIONAL</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ professional.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ professional.description }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-img
          src="https://www.technologyspeakers.com/storage/celebrities/no_img.png"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text>PROFILE</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProfessionalCard",
  data() {
    return {};
  },
  props: {
    professional: Object,
  },
};
</script>
