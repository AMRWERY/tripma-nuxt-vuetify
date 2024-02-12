<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-10" elevation="6">
                    <v-row>
                        <v-col cols="12" md="6" class="blue rounded-bl-xl">
                            <v-img src="https://themehut.co/html/geair/assets/img/slider/slider_bg01.jpg" :aspect-ratio="1"
                                cover height="725" />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card-text class="mt-12">
                                <h4 class="text-center">Sign Up for an Account</h4>
                                <h6 class="text-center text-grey">Let's get you all set up so you can start
                                    creatin your <br>
                                    first onboarding experience</h6>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" sm="8">
                                        <v-form @submit.prevent="signUp">
                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="First Name" variant="outlined" density="compact"
                                                        color="blue" class="mt-4" />
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="Last Name" variant="outlined" density="compact"
                                                        color="blue" class="mt-4" />
                                                </v-col>
                                            </v-row>
                                            <v-text-field label="Email" variant="outlined" density="compact" color="blue"
                                                v-model="email" />
                                            <v-text-field label="Password" variant="outlined" density="compact" color="blue"
                                                type="password" v-model="password" />
                                            <v-btn type="submit" color="indigo" block class="text-capitalize">Sign
                                                up</v-btn>
                                        </v-form>

                                        <h5 class="text-center text-grey mt-4 mb-3">Or Sign up using</h5>
                                        <div class="mb-16">
                                            <v-btn variant="outlined" color="black" block rounded="xl" size="large"
                                                class="text-capitalize" @click="signUpWithGoogleAccount">
                                                <v-icon color="red" icon="mdi-google" class="mr-auto" />
                                                <p class="ml-2">Google</p>
                                            </v-btn>
                                        </div>
                                        <div class="card-text">
                                            <v-card-text class="text-blue">
                                                <h3 class="text-center">Already have an account?</h3>
                                                <h6 class="text-center">Please Login</h6>
                                            </v-card-text>
                                            <div class="text-center">
                                                <nuxt-link class="text-capitalize text-blue" to="/login">Login</nuxt-link>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
import { useAuthStore } from '@/stores/authStore'

const store = useAuthStore()
const email = ref('')
const password = ref('')
const username = ref('')

const signUp = async () => {
    await store.userSignUp({
        email: email.value,
        password: password.value,
        username: username.value
    });
    email.value = ''
    password.value = ''
    username.value = ''
};

const signUpWithGoogleAccount = () => {
    store.signUpWithGoogle({
        email: email.value,
        username: username.value
    });
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}

.card-text {
    text-align: center;
}
</style>