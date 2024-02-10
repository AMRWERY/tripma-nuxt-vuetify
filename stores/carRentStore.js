import { defineStore } from "pinia";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useCarPackage = defineStore("carPackage", {
  state: () => {
    return {
      places: [],
    };
  },

  actions: {
    async fetchPlaces() {
      const querySnap = await getDocs(query(collection(db, "carRent")));
      let product = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        product.push(pro);
      });
      this.places = product;
    },
  },
});
