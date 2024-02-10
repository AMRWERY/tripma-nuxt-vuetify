import { defineStore } from "pinia";
import { getDocs, collection, query } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase/config";

export const useOfferDealsStore = defineStore("offerDeals", {
  state: () => {
    return {
      places: [],
      videos: [],
      files: [],
    };
  },

  actions: {
    async fetchPlaces() {
      const querySnap = await getDocs(query(collection(db, "placesToStay")));
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

    async fetchAllVideos() {
      try {
        const videosRef = ref(storage, "/offer deals");
        const videosList = await listAll(videosRef);
        for (const videoRef of videosList.items) {
          const downloadURL = await getDownloadURL(videoRef);
          this.videos.push({ name: videoRef.name, url: downloadURL });
        }
        const querySnap = await getDocs(query(collection(db, "placesToStay")));
        let placesData = [];
        querySnap.forEach((doc) => {
          let pro = {
            id: doc.id,
            ...doc.data(),
          };
          placesData.push(pro);
          // console.log(placesData);
        });
        this.placesToStayData = placesData;
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    },

    async fetchVideo(filePath) {
      // debugger;
      try {
        const downloadURL = await getDownloadURL(ref(storage, filePath));
        this.videos.push({ name: filePath, url: downloadURL });
      } catch (error) {
        console.error(`Error fetching video ${filePath}:`, error);
      }
    },
  },
});
