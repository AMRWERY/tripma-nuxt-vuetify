<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-16 mx-auto" elevation="6" width="500">
                    <v-card-text class="mt-12 text-center">
                        <p class="text-center text-grey text-h6">Verify Your Account</p>
                        <div class="text-body-2">
                            We sent a verification code to example..@gmail.com <br>

                            Please check your email and paste the code below.
                        </div>
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                                <v-form class="my-6">
                                    <v-sheet color="surface">
                                        <v-otp-input v-model="otp" type="password" variant="outlined" />
                                    </v-sheet>
                                    <v-btn type="submit" color="indigo" block class="text-capitalize"
                                        to="/login">Verify</v-btn>

                                    <div class="text-caption mt-5">
                                        Didn't receive the code? <a href="#" @click.prevent="otp = ''">Resend</a>
                                    </div>
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const otp = ref('')
</script>