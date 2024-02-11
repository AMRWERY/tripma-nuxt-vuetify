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
            <v-btn variant="text" icon @click="switchLanguage">
                <v-tooltip activator="parent" location="bottom">Change Language</v-tooltip>
                <v-icon icon="mdi-google-translate" />
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
import { useI18n } from 'vue-i18n'

const theme = useTheme()
const drawer = ref(false)
const { t } = useI18n();

const links = reactive([
    { title: t('layout.home'), route: '/' },
    { title: "Our Service", route: '/our-service' },
    { title: "Programs", route: '/programs' },
    { title: "About Us", route: '' },
    { title: "Contact Us", route: '' },
]);

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const switchLanguage = () => {
    const newLang = $i18n.locale.value === 'en' ? 'ar' : 'en';
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('currentLang', newLang);
    }
    $i18n.locale.value = newLang;
    updateLanguageClassInBody(newLang);
};

const updateLanguageClassInBody = (lang) => {
    const body = document.querySelector("body");
    if (lang === "ar") {
        body.classList.remove("ltr");
        body.classList.add("rtl");
    } else {
        body.classList.remove("rtl");
        body.classList.add("ltr");
    }
};

const $i18n = useI18n()

// Initialize language preference when the page loads
const initialLang = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('currentLang') : null;
if (initialLang) {
    $i18n.locale.value = initialLang;
    updateLanguageClassInBody(initialLang);
}

const currentLang = computed(() => $i18n.locale.value);

watch(currentLang, (newLang) => {
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem("currentLang", newLang);
    }
    updateLanguageClassInBody(newLang);
});
</script>