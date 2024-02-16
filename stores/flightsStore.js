import { defineStore } from "pinia";
import { getDocs, collection, addDoc, query } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useFlightsPackage = defineStore("flights-Package", {
  state: () => {
    return {
      flights: [],
    };
  },

  actions: {
    async fetchFlights() {
      const querySnap = await getDocs(query(collection(db, "flights")));
      let flight = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        flight.push(pro);
      });
      this.flights = flight;
    },

    async addNewFlight(data) {
      const colRef = collection(db, "flights");
      const docRef = await addDoc(colRef, data);
      console.log("Document was created with ID:", docRef.id);
    },
  },
});
