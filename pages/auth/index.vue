<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-10" elevation="6">
                    <v-window v-model="step">
                        <v-window-item :value="1" transition="slide-x-transition">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card-text class="mt-12">
                                        <h4 class="text-center">Login in to Your Account</h4>
                                        <h6 class="text-center text-grey">Log in to your account so you can continue
                                            building <br>and editing your onboarding flows</h6>
                                        <v-row align="center" justify="center">
                                            <v-col cols="12" sm="8">
                                                <v-text-field label="Email" variant="outlined" density="compact"
                                                    color="blue" class="mt-16" />
                                                <v-text-field label="Password" variant="outlined" density="compact"
                                                    color="blue" type="password" />
                                                <v-row>
                                                    <v-col cols="12" sm="7">
                                                        <v-checkbox label="Remember Me" class="mt-n4" color="blue" />
                                                    </v-col>
                                                    <v-col cols="12" sm="5">
                                                        <nuxt-link class="text-caption text-blue" to="">Forgot
                                                            password</nuxt-link>
                                                    </v-col>
                                                </v-row>
                                                <v-btn color="indigo" block class="text-capitalize">Log in</v-btn>
                                                <h5 class="text-center text-grey mt-4 mb-3">Or Log in using</h5>
                                                <div class="d-flex justify-space-between align-center mx-10 mb-16">
                                                    <v-btn variant="outlined" color="grey">
                                                        <v-icon color="indigo" icon="mdi-facebook" />
                                                    </v-btn>
                                                    <v-btn variant="outlined" color="grey">
                                                        <v-icon color="red" icon="mdi-google" />
                                                    </v-btn>
                                                    <v-btn variant="outlined" color="grey">
                                                        <v-icon color="blue-darken-1" icon="mdi-twitter" />
                                                    </v-btn>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                                    <div class="card-text">
                                        <v-card-text class="text-blue">
                                            <h3 class="text-center">Don't Have an Account Yet?</h3>
                                            <h6 class="text-center">Let's get you all set up so you can start creating your
                                                your first<br> onboarding experience</h6>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn variant="outlined" class="text-capitalize" @click="step++">Sign
                                                Up</v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item :value="2" reverse-transition="slide-x-reverse-transition">
                            <v-row>
                                <v-col cols="12" md="6" class="blue">
                                    <div class="card-text">
                                        <v-card-text class="text-blue">
                                            <h3 class="text-center ">Already Signed up?</h3>
                                            <h6 class="text-center">Log in to your account so you can continue building
                                                and<br> editing your onboarding flows</h6>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn variant="outlined" class="text-capitalize" @click="step--">Log in</v-btn>
                                        </div>
                                    </div>
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
                                                            <v-text-field label="First Name" variant="outlined"
                                                                density="compact" color="blue" class="mt-4" />
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field label="Last Name" variant="outlined"
                                                                density="compact" color="blue" class="mt-4" />
                                                        </v-col>
                                                    </v-row>
                                                    <v-text-field label="Email" variant="outlined" density="compact"
                                                        color="blue" v-model="email" />
                                                    <v-text-field label="Password" variant="outlined" density="compact"
                                                        color="blue" type="password" v-model="password" />
                                                    <v-row>
                                                        <v-col cols="12">
                                                            <v-checkbox label="I Accept Terms &
                                                            Conditions" class="mt-n4 text-capitalize" color="indigo">
                                                            </v-checkbox>
                                                        </v-col>
                                                    </v-row>
                                                    <v-btn type="submit" color="indigo" block class="text-capitalize">Sign
                                                        up</v-btn>
                                                </v-form>

                                                <h5 class="text-center text-grey mt-4 mb-3">Or Sign up using</h5>
                                                <div class="d-flex justify-space-between align-center mx-10 mb-11">
                                                    <v-btn variant="outlined" color="grey">
                                                        <v-icon color="indigo" icon="mdi-facebook" />
                                                    </v-btn>
                                                    <v-btn variant="outlined" color="grey" @click="signUpWithGoogleAccount">
                                                        <v-icon color="red" icon="mdi-google" />
                                                    </v-btn>
                                                    <v-btn variant="outlined" color="grey">
                                                        <v-icon color="blue-darken-1" icon="mdi-twitter" />
                                                    </v-btn>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
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

const signUp = () => {
    store.userSignUp({
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

const step = ref(1);
const props = defineProps({
    source: String,
});
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
    padding: 180px 0;
}
</style>