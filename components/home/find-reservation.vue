<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col class="text-center">
                <p class="text-h4 font-weight-medium">{{ $t('home.find_your_reservation') }}</p>
                <p class="text-subtitle-1">{{
                    $t('home.you_can_search_for_your_reservation_with_your_20_character_reservation_code') }}
                </p>
                <v-card class="mx-auto mt-6" max-width="400" flat>
                    <v-text-field density="comfortable" variant="outlined" append-inner-icon="mdi-magnify" single-line
                        placeholder="e.g. 2alw2m5lfwlc4ockk0kw" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>

</script>