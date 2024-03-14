<template>
    <v-btn variant="text" :class="{ 'show-btns': isHovering }" :color="transparent" icon="mdi-play"
        v-for="(place, index) in store.places" :key="index" @click="openDialog(place.video)" />

    <v-dialog v-model="dialog" width="auto">
        <v-card>
            <v-card-text>
                <video v-if="currentVideoUrl" controls>
                    <source :src="currentVideoUrl" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useOfferDealsStore } from '@/stores/offerDealsStore'

const store = useOfferDealsStore()
const dialog = ref(false)
const isHovering = ref(false)
const transparent = ref('rgba(255, 255, 255, 0)')
const currentVideoUrl = ref('')
const currentVideoName = ref('')

const getVideoUrl = (videoName) => {
    const video = store.videos.find((video) => video.name === videoName);
    return video ? video.url : '';
};

const openDialog = (videoName) => {
    currentVideoName.value = videoName
    currentVideoUrl.value = getVideoUrl(videoName)
    dialog.value = true
}

onMounted(async () => {
    await store.fetchAllVideos()
})
</script>

<style scoped>
.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}

video {
    width: 600px;
}
</style>