import { defineStore } from "pinia";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useHotelStore = defineStore("hotelsPackage", {
  state: () => {
    return {
      hotels: [],
    };
  },

  actions: {
    async fetchHotels() {
      const querySnap = await getDocs(query(collection(db, "hotels")));
      let hotel = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        hotel.push(pro);
      });
      this.hotels = hotel;
    },
  },
});
