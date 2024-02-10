import { defineStore } from "pinia";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useCountryStore = defineStore("countriesPackage", {
  state: () => {
    return {
      countries: [],
    };
  },

  actions: {
    async fetchCountries() {
      const querySnap = await getDocs(query(collection(db, "countries")));
      let country = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        country.push(pro);
      });
      this.countries = country;
    },
  },
});
