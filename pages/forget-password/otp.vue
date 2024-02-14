<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-16 mx-auto" elevation="6" width="500">
                    <v-card-text class="mt-12 text-center">
                        <p class="text-center text-grey text-h6">{{ $t('auth.verify_your_account') }}</p>
                        <div class="text-body-2">
                            {{ $t('auth.we_sent_a_verification_code_to') }} <span>example..@gmail.com</span> <br>
                            {{ $t('auth.please_check_your_email_and_paste_the_code_below') }}
                        </div>
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                                <v-form class="my-6">
                                    <v-sheet color="surface">
                                        <v-otp-input v-model="otp" type="password" variant="outlined" />
                                    </v-sheet>
                                    <v-btn type="submit" color="indigo" block class="text-capitalize">{{ $t('btn.verify')
                                    }}</v-btn>
                                    <div class="text-caption mt-5">
                                        {{ $t('auth.did_not_receive_the_code?') }} <a href="#" @click.prevent="otp = ''">{{
                                            $t('auth.resend') }}</a>
                                    </div>
                                    <div class="text-center mt-4">
                                        <nuxt-link class="text-capitalize text-blue" to="/login">{{
                                            $t('auth.back_to_login') }}</nuxt-link>
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