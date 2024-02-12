<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-10" elevation="6">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-card-text class="mt-12">
                                <h4 class="text-center">Login in to Your Account</h4>
                                <h6 class="text-center text-grey">Log in to your account so you can continue
                                    check <br>our services</h6>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" sm="8">
                                        <v-text-field label="Email" variant="outlined" density="compact" color="blue"
                                            class="mt-8" />
                                        <v-text-field label="Password" variant="outlined" density="compact" color="blue"
                                            type="password" />
                                        <v-row>
                                            <v-col cols="12" sm="7">
                                                <v-checkbox label="Remember Me" class="mt-n4" color="blue" />
                                            </v-col>
                                            <v-col cols="12" sm="5">
                                                <nuxt-link class="text-caption text-blue text-decoration-none" to="">Forgot
                                                    password</nuxt-link>
                                            </v-col>
                                        </v-row>
                                        <v-btn color="indigo" block class="text-capitalize">Log in</v-btn>
                                        <h5 class="text-center text-grey mt-4 mb-3">Or Log in using</h5>
                                        <div class="mb-16">
                                            <v-btn variant="outlined" color="black" block rounded="xl" size="large"
                                                class="text-capitalize">
                                                <v-icon color="red" icon="mdi-google" class="mr-auto" />
                                                <p class="ml-2">Google</p>
                                            </v-btn>
                                        </div>
                                        <div class="card-text">
                                            <v-card-text class="text-blue">
                                                <h3 class="text-center">Don't Have an Account Yet?</h3>
                                                <h6 class="text-center">Let's get you all set up so you can start creating
                                                    your
                                                    your first<br> onboarding experience</h6>
                                            </v-card-text>
                                            <div class="text-center">
                                                <nuxt-link class="text-capitalize text-blue" to="/sign-up">Sign
                                                    Up</nuxt-link>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" md="6" class="blue rounded-bl-xl">
                            <v-img src="https://themehut.co/html/geair/assets/img/slider/slider_bg01.jpg" :aspect-ratio="1"
                                cover height="725" />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>

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