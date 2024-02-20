<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-16 mx-auto" elevation="6" width="500">
                    <v-card-text class="mt-12">
                        <p class="text-center text-grey text-h6">{{
                            $t('auth.enter_email_address_associated_with_your_account') }} <br>
                            {{ $t('auth.and_we_will_send_otp_code_to_reset_your_password') }}</p>
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                                <v-form class="my-6" @submit.prevent="resetPassword">
                                    <v-text-field :label="$t('auth.email')" variant="outlined" density="compact"
                                        color="blue" v-model="email" :rules="emailRules" prepend-inner-icon="mdi-at" />
                                    <v-btn type="submit" color="indigo" block class="text-capitalize">{{ $t('btn.continue')
                                    }}</v-btn>
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
import { useAuthStore } from '@/stores/authStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const email = ref('')
const store = useAuthStore()

const emailRules = [
    value => {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) return true;
        return t('form_validation.must_be_a_valid_email');
    },
];

const resetPassword = () => {
    if (!validateFields()) return;
    store.resetUserPassword({
        email: email.value,
    });
};


const validateFields = () => {
    const validations = [
        ...emailRules.map(rule => rule(email.value)),
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