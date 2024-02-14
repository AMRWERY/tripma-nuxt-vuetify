<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="10">
                <v-card class="mt-16 mx-auto" elevation="6" width="500">
                    <v-card-text class="mt-12">
                        <p class="text-center text-grey text-h6">Enter email address associated with your account <br>and
                            we'll
                            send otp code to reset your password</p>
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                                <v-form class="my-6">
                                    <v-text-field label="Email" variant="outlined" density="compact" color="blue"
                                        v-model="email" :rules="emailRules" />
                                    <v-btn type="submit" color="indigo" block class="text-capitalize"
                                        to="/forget-password/otp">Continue</v-btn>
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
const emailRules = [
    value => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
        return 'Must be a valid e-mail.'
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