<template>
    <v-locale-provider :rtl="isRTL">
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" :location="drawerLocation" color="#0a2339">
                <v-sheet color="grey-lighten-4 text-center" class="pa-4">
                    <v-avatar class="mb-4" size="64" image="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
                    <div>Hi, Amr Mohamed</div>
                </v-sheet>
                <v-divider />
                <v-list>
                    <v-list-item link v-for="link in links" :key="link" :title="t(link.title)" :to="link.route"
                        :prepend-icon="link.icon" />
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn block color="indigo" rounded="lg" size="large" class="text-capitalize" @click="logout">
                            {{ $t('btn.logout') }}
                        </v-btn>
                    </div>
                </template>
            </v-navigation-drawer>

            <v-app-bar color="#0a2339">
                <v-app-bar-nav-icon @click="drawer = !drawer" />
                <v-app-bar-title>Tripma</v-app-bar-title>
                <v-spacer />
                <v-btn variant="text" icon @click="switchLanguage">
                    <v-tooltip activator="parent" location="bottom">{{ $t('tooltip.change_language') }}</v-tooltip>
                    <v-icon icon="mdi-google-translate" />
                </v-btn>
                <v-btn variant="text" icon to="/">
                    <v-tooltip activator="parent" location="bottom">{{ $t('tooltip.back_to_home') }}</v-tooltip>
                    <v-icon icon="mdi-home" />
                </v-btn>
            </v-app-bar>

            <v-main>
                <v-card-text>
                    <slot />
                </v-card-text>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
  
<script setup>
import { useAuthStore } from '@/stores/authStore'
import { useI18n } from 'vue-i18n'

const links = reactive([
    { title: 'layout.dashboard', icon: 'mdi-monitor-dashboard', route: '/dashboard' },
    { title: 'layout.flights', icon: 'mdi-airplane', route: '/dashboard/flights' },
    { title: 'layout.hotels', icon: 'mdi-office-building', route: '' },
    { title: 'layout.wallet', icon: 'mdi-wallet-bifold', route: '' },
    { title: 'layout.reports', icon: 'mdi-file-chart', route: '' },
    { title: 'layout.statistics', icon: 'mdi-chart-pie', route: '' },
    { title: 'layout.settings', icon: 'mdi-cog', route: '' },
])

const store = useAuthStore()
const drawer = ref(null)
const $i18n = useI18n()
const { t } = useI18n();

const determineDrawerLocation = () => {
    return isRTL.value ? 'right' : 'left';
};

const drawerLocation = computed(() => determineDrawerLocation());

const isRTL = computed(() => $i18n.locale.value === 'ar');

const currentLang = computed(() => $i18n.locale.value);

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

const initialLang = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('currentLang') : null;
if (initialLang) {
    $i18n.locale.value = initialLang;
    updateLanguageClassInBody(initialLang);
}

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