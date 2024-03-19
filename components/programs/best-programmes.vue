<template>
  <v-row dense class="ms-12">
    <v-col>
      <div class="d-flex">
        <v-icon icon="mdi-map-marker-outline" size="large" color="blue-darken-1" class="mt-1" />
        <p class="ms-2 text-h6">Best Tourist Programs</p>
      </div>
      <p class="ms-8">Choose the most suitable tourist program</p>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-sheet class="mx-auto" max-width="1400">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
          <v-slide-group-item v-for="offer in store.places" :key="offer">
            <v-card class="mx-auto me-4 my-4 card" max-width="350" flat :to="'/programs/' + offer.id">
              <div class="image-container">
                <v-img :src="offer.cover" height="320px" cover />
              </div>
              <v-card-text>
                <div class="d-flex">
                  <p class="text-h6 text-blue-darken-3 font-weight-bold">{{ offer.smallTitle }}
                  </p>
                  <span class="text-h6 ms-auto font-weight-medium">${{ offer.price }}</span>
                </div>
                <div class="d-flex my-2">
                  <p class="text-subtitle-1">{{ offer.hotel }}</p>
                  <span class="ms-auto mt-1 text-subtitle-2">{{ offer.duration }}</span>
                </div>
                <ratings />
              </v-card-text>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import { useTourismProgrammesCards } from '@/stores/tourismProgramsStore'

const store = useTourismProgrammesCards()

onMounted(() => {
  store.fetchPlaces()
})

const model = ref(null)
</script>

<style scoped>
.card {
  border-radius: 20px;
}

.image-container {
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.image-container:hover {
  transform: scale(1.05);
}
</style>