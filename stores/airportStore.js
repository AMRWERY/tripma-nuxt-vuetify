import { defineStore } from "pinia";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useAirportsStore = defineStore("airportsPackage", {
  state: () => {
    return {
      airports: [],
    };
  },

  actions: {
    async fetchAirports() {
      const querySnap = await getDocs(query(collection(db, "airports")));
      let airport = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        airport.push(pro);
      });
      this.airports = airport;
    },
  },
});
