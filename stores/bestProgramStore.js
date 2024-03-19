import { defineStore } from "pinia";
import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useBestProgrammesStore = defineStore("best-programmes-store", {
  state: () => {
    return {
      places: [],
      selectedProgram: null,
    };
  },

  actions: {
    async fetchPlaces() {
      const querySnap = await getDocs(query(collection(db, "programmes")));
      let placesArray = [];
      querySnap.forEach((doc) => {
        let pro = {
          id: doc.id,
          ...doc.data(),
        };
        placesArray.push(pro);
      });
      this.places = placesArray;
    },

    async getProgramById(id) {
      const docSnap = await getDoc(doc(db, "programmes", id));
      if (docSnap.exists()) {
        let program = { ...docSnap.data(), id: id };
        this.selectedProgram = program;
        // console.log(program);
        return program;
      }
    },
  },
});
