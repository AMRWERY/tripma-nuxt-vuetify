<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-10" elevation="6">
                    <v-row>
                        <v-col cols="12" md="6" class="blue rounded-bl-xl">
                            <v-img src="https://themehut.co/html/geair/assets/img/slider/slider_bg01.jpg"
                                :aspect-ratio="1" cover height="725" />
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card-text class="mt-12">
                                <h4 class="text-center">{{ $t('auth.sign_up_for_an_account') }}</h4>
                                <h6 class="text-center text-grey">{{
                                    $t('auth.let_is_get_you_all_set_up_so_you_can_start_creatin_your') }} <br>
                                    {{ $t('auth.first_onboarding_experience') }}</h6>
                                <v-row align="center" justify="center">
                                    <v-col cols="12" sm="8">
                                        <v-form @submit.prevent="signUp">
                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field :label="$t('auth.first_name')" variant="outlined"
                                                        density="compact" color="blue" class="mt-4" v-model="firstName"
                                                        :rules="firstNameRules" prepend-inner-icon="mdi-rename" />
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field :label="$t('auth.last_name')" variant="outlined"
                                                        density="compact" color="blue" class="mt-4" v-model="lastName"
                                                        :rules="lastNameRules" prepend-inner-icon="mdi-rename" />
                                                </v-col>
                                            </v-row>
                                            <v-text-field :label="$t('auth.email')" variant="outlined" density="compact"
                                                color="blue" v-model="email" :rules="emailRules"
                                                prepend-inner-icon="mdi-at" />
                                            <v-text-field :label="$t('auth.password')" variant="outlined"
                                                density="compact" color="blue" v-model="password" :rules="passwordRules"
                                                :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                                :type="show ? 'text' : 'password'" @click:append-inner="show = !show"
                                                prepend-inner-icon="mdi-lock" />
                                            <v-btn type="submit" color="indigo" block class="text-capitalize">{{
                                    $t('auth.sign_up') }}</v-btn>
                                        </v-form>

                                        <h5 class="text-center text-grey mt-4 mb-3">{{ $t('auth.or_sign_up_using') }}
                                        </h5>
                                        <div class="mb-16">
                                            <v-btn variant="outlined" color="black" block rounded="xl" size="large"
                                                class="text-capitalize" @click="signUpWithGoogleAccount">
                                                <v-icon color="red" icon="mdi-google" class="mr-auto" />
                                                <p class="ml-2">{{ $t('btn.google') }}</p>
                                            </v-btn>
                                        </div>
                                        <div class="card-text">
                                            <v-card-text class="text-blue">
                                                <h3 class="text-center">{{ $t('auth.already_have_an_account?') }}</h3>
                                                <h6 class="text-center">{{ $t('auth.please_login') }}</h6>
                                            </v-card-text>
                                            <div class="text-center">
                                                <nuxt-link class="text-capitalize text-blue" to="/login">{{
                                    $t('auth.back_to_login') }}</nuxt-link>
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const show = ref(false)

const firstNameRules = [
    value => {
        if (value?.length > 2) return true
        return t('form_validation.first_name_must_be_at_least_2_characters')
    },
]

const lastNameRules = [
    value => {
        if (value?.length > 2) return true
        return t('form_validation.last_name_must_be_at_least_2_characters')
    },
]

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
const firstName = ref('')
const lastName = ref('')

const store = useAuthStore()

const signUp = async () => {
    if (!validateFields()) return;
    await store.userSignUp({
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value
    });
};

const signUpWithGoogleAccount = () => {
    store.signUpWithGoogle({
        email: email.value
    });
};

const validateFields = () => {
    const validations = [
        ...firstNameRules.map(rule => rule(firstName.value)),
        ...lastNameRules.map(rule => rule(lastName.value)),
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