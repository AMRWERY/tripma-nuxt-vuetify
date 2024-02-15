<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-10" elevation="6">
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-card-text class="mt-12">
                                <h4 class="text-center">{{ $t('auth.login_into_your_account') }}</h4>
                                <h6 class="text-center text-grey">{{
                                    $t('auth.login_into_your_account_so_you_can_continue_check') }} <br>{{
        $t('auth.our_services') }}</h6>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" sm="8">
                                        <v-form @submit.prevent="signIn">
                                            <v-text-field :label="$t('auth.email')" variant="outlined" density="compact"
                                                color="blue" v-model="email" :rules="emailRules" />
                                            <div class="text-right">
                                                <nuxt-link class="text-caption text-blue text-decoration-none"
                                                    to="/forget-password">{{ $t('auth.forget_password') }}</nuxt-link>
                                            </div>
                                            <v-text-field :label="$t('auth.password')" variant="outlined" density="compact"
                                                color="blue" type="password" v-model="password" :rules="passwordRules" />
                                            <v-btn type="submit" color="indigo" block class="text-capitalize">{{
                                                $t('btn.login') }}</v-btn>
                                        </v-form>
                                        <h5 class="text-center text-grey mt-4 mb-3">{{ $t('auth.or_login_using') }}</h5>
                                        <div class="mb-16">
                                            <v-btn variant="outlined" color="black" block rounded="xl" size="large"
                                                class="text-capitalize" @click="signInWithGoogleAccount">
                                                <v-icon color="red" icon="mdi-google" class="mr-auto" />
                                                <p class="ml-2">{{ $t('btn.google') }}</p>
                                            </v-btn>
                                        </div>
                                        <div class="card-text">
                                            <v-card-text class="text-blue">
                                                <h3 class="text-center">{{ $t('auth.do_not_have_an_account_yet?') }}</h3>
                                                <h6 class="text-center">{{
                                                    $t("auth.let_is_get_you_all_set_up_so_you_can_start_creating_your_first")
                                                }}<br> {{ $t('auth.onboarding_experience') }}</h6>
                                            </v-card-text>
                                            <div class="text-center">
                                                <nuxt-link class="text-capitalize text-blue" to="/sign-up">{{
                                                    $t('auth.sign_up') }}</nuxt-link>
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
import { useAuthStore } from '@/stores/authStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emailRules = [
    value => {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true;
        return t('form_validation.must_be_a_valid_email');
    },
];

const passwordRules = [
    value => {
        if (value?.length >= 7) return true
        return t('form_validation.password_must_be_at_least_7_characters')
    },
]

const email = ref('')
const password = ref('')

const store = useAuthStore()

const signIn = () => {
    if (!validateFields()) return;
    store.userSignIn({
        email: email.value,
        password: password.value,
    });
};

const signInWithGoogleAccount = () => {
    store.signInWithGoogle({
        email: email.value,
    });
};

const validateFields = () => {
    const validations = [
        ...emailRules.map(rule => rule(email.value)),
        ...passwordRules.map(rule => rule(password.value))
    ];

    const errors = validations.filter(result => typeof result === 'string');
    if (errors.length > 0) {
        errors.forEach(error => console.error(error));
        return false;
    }
    return true;
};
</script>

<style scoped>
.card-text {
    text-align: center;
}
</style>