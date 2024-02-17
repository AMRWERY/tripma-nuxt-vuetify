<template>
    <v-locale-provider :rtl="isRTL">
        <v-layout>
            <v-app-bar color="#0a2339" prominent>
                <v-list bg-color="#0a2339" class="ms-3 d-none d-sm-none d-md-flex d-lg-flex">
                    <v-list-item link density="compact" v-for="link in links" :key="link" :title="t(link.title)"
                        :to="link.route" />
                </v-list>
                <v-spacer />
                <v-btn variant="text" icon v-if="isAuthenticated">
                    <v-tooltip activator="parent" location="bottom">{{ $t('tooltip.profile') }}</v-tooltip>
                    <v-icon icon="mdi-account" size="large" />
                </v-btn>
                <v-btn v-if="isAuthenticated && userEmail === 'amrmounir2@gmail.com'" variant="text" icon to="/dashboard">
                    <v-tooltip activator="parent" location="bottom">{{ $t('tooltip.dashboard') }}</v-tooltip>
                    <v-icon icon="mdi-monitor-dashboard" size="large" />
                </v-btn>
                <!-- <v-btn variant="text" icon @click="toggleTheme">
                    <v-tooltip activator="parent" location="bottom">{{ $t('tooltip.change_theme') }}</v-tooltip>
                    <v-icon
                        :icon="theme.global.current.value.dark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'" />
                </v-btn> -->
                <v-btn variant="text" icon @click="switchLanguage">
                    <v-tooltip activator="parent" location="bottom">{{ $t('tooltip.change_language') }}</v-tooltip>
                    <v-icon icon="mdi-google-translate" />
                </v-btn>
                <v-btn v-if="!isAuthenticated" variant="elevated" color="indigo" rounded="lg" size="large"
                    class="text-capitalize mx-1" to="/login">{{ $t('btn.login') }}</v-btn>
                <v-btn v-else variant="text" icon class="d-none d-sm-none d-md-flex d-lg-flex" @click="logout">
                    <v-tooltip activator="parent" location="bottom">Logout</v-tooltip>
                    <v-icon icon="mdi-logout" size="large" />
                </v-btn>
                <v-app-bar-nav-icon variant="text" class="d-flex d-sm-flex d-md-none d-lg-none"
                    @click.stop="drawer = !drawer" />
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="drawerLocation" temporary color="#0a2339">
                <v-list>
                    <v-list-item link v-for="link in links" :key="link" :title="t(link.title)" :to="link.route" />
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn v-if="isAuthenticated" block color="indigo" rounded="lg" size="large" class="text-capitalize"
                            @click="logout">
                            {{ $t('btn.logout') }}
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
    </v-locale-provider>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
// import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

const store = useAuthStore()
// const theme = useTheme()
const drawer = ref(false)
const { t } = useI18n();

const links = reactive([
    { title: 'layout.home', route: '/' },
    { title: 'layout.our_service', route: '/our-service' },
    // { title: 'layout.programs', route: '/programs' },
    { title: 'layout.about_us', route: '' },
    { title: 'layout.contact_us', route: '' },
]);

// const toggleTheme = () => {
//     theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
// }

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

const initialLang = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('currentLang') : null;
if (initialLang) {
    $i18n.locale.value = initialLang;
    updateLanguageClassInBody(initialLang);
}

const determineDrawerLocation = () => {
    return isRTL.value ? 'right' : 'left';
};

const currentLang = computed(() => $i18n.locale.value);

const drawerLocation = computed(() => determineDrawerLocation());

const isRTL = computed(() => $i18n.locale.value === 'ar');

const isAuthenticated = computed(() => {
    if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem('isAuthenticated') === 'true';
    } else {
        return false;
    }
});

const userEmail = computed(() => {
    if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem('email');
    } else {
        return null;
    }
});

watch(currentLang, (newLang) => {
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem("currentLang", newLang);
    }
    updateLanguageClassInBody(newLang);
});

const logout = () => {
    try {
        store.logout();
        setTimeout(() => {
            location.reload();
        }, 500);
    } catch (error) {
        console.log(error);
    }
}
</script>