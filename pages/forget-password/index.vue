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
                                <v-form class="my-6">
                                    <v-text-field :label="$t('auth.email')" variant="outlined" density="compact"
                                        color="blue" v-model="email" :rules="emailRules" />
                                    <v-btn type="submit" color="indigo" block class="text-capitalize"
                                        to="/forget-password/otp">{{ $t('btn.continue') }}</v-btn>
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emailRules = [
    value => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
        return t('form_validation.must_be_a_valid_email')
    },
]

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