<template>
    <v-layout>
        <v-app-bar color="#0a2339" prominent>
            <v-list bg-color="#0a2339" class="ml-3 d-none d-sm-none d-md-flex d-lg-flex">
                <v-list-item link density="compact" v-for="link in links" :key="link" :title="link.title"
                    :to="link.route" />
            </v-list>
            <v-spacer />
            <v-btn variant="text" icon>
                <v-tooltip activator="parent" location="bottom">Profile</v-tooltip>
                <v-icon icon="mdi-account" size="large" />
            </v-btn>
            <v-btn variant="text" icon>
                <v-tooltip activator="parent" location="bottom">Dashboard</v-tooltip>
                <v-icon icon="mdi-monitor-dashboard" size="large" />
            </v-btn>
            <v-btn variant="text" icon @click="toggleTheme">
                <v-tooltip activator="parent" location="bottom">Change Theme</v-tooltip>
                <v-icon :icon="theme.global.current.value.dark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'" />
            </v-btn>
            <v-btn variant="elevated" color="indigo" rounded="lg" size="large" class="text-capitalize mx-1"
                to="/auth">Login</v-btn>
            <v-btn variant="text" icon class="d-none d-sm-none d-md-flex d-lg-flex">
                <v-tooltip activator="parent" location="bottom">Logout</v-tooltip>
                <v-icon icon="mdi-logout" size="large" />
            </v-btn>
            <v-app-bar-nav-icon variant="text" class="d-flex d-sm-flex d-md-none d-lg-none"
                @click.stop="drawer = !drawer" />
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left" temporary color="#0a2339">
            <v-list>
                <v-list-item link v-for="link in links" :key="link" :title="link.title" :to="link.route" />
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block color="indigo" rounded="lg" size="large" class="text-capitalize">
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-main>
            <v-card-text>
                <slot />
            </v-card-text>
        </v-main>
    </v-layout>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const drawer = ref(false)

const links = reactive([
    { title: 'Home', route: '/' },
    { title: "Our Service", route: '/our-service' },
    { title: "Programs", route: '/programs' },
    { title: "About Us", route: '' },
    { title: "Contact Us", route: '' },
]);

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
