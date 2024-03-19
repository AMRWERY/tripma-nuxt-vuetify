import { defineStore } from "pinia";
import { getDocs, collection, query, getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const useTourismProgrammesStore = defineStore(
  "tourism-programmes-store",
  {
    state: () => {
      return {
        places: [],
        filteredPlacesArray: [],
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
        this.filteredPlacesArray = this.places;
      },

      filteredPlaces(selectedFilter) {
        if (selectedFilter === "Show All") {
          return (this.filteredPlacesArray = this.places);
        } else {
          return (this.filteredPlacesArray = this.places.filter(
            (offer) => offer.car === selectedFilter
          ));
        }
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
  }
);
