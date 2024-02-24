import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  getAuth,
  // updatePassword,
  getIdToken,
  // onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isAuthenticated: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userToken: null,
      isUserLoggedIn: false,
    };
  },

  actions: {
    userSignUp(payload) {
      const router = useRouter();
      const { email, password, firstName, lastName } = payload;
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          if (user) {
            this.isAuthenticated = true;
            sessionStorage.setItem("isAuthenticated", true);
            sessionStorage.setItem("password", password);
            sessionStorage.setItem("firstName", firstName);
            sessionStorage.setItem("lastName", lastName);
            sessionStorage.setItem("email", email);
            router.replace("/");
            setTimeout(() => {
              location.reload();
            }, 500);
            try {
              await updateProfile(user, {
                displayName: payload.displayName,
              });
              this.firstName = payload.firstName;
              const token = await getIdToken(user);
              sessionStorage.setItem("userToken", token);
              sessionStorage.setItem("userId", user.uid);
              await addDoc(collection(db, "users"), {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password,
                id: user.uid,
              });
              sessionStorage.setItem("userToken", token);
            } catch (error) {
              console.log("Error:", error);
            }
          } else {
            router.replace("/register");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    userSignIn(payload) {
      const router = useRouter();
      const { email, password } = payload;
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          if (user) {
            this.isAuthenticated = true;
            sessionStorage.setItem("isAuthenticated", true);
            sessionStorage.setItem("password", password);
            sessionStorage.setItem("email", email);
            router.replace("/");
            setTimeout(() => {
              location.reload();
            }, 500);
            try {
              const usersCollection = collection(db, "users");
              const q = query(
                usersCollection,
                where("email", "==", user.email)
              );
              const querySnapshot = await getDocs(q);
              if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                this.firstName = userData.firstName;
                sessionStorage.setItem("firstName", userData.firstName);
                sessionStorage.setItem("username", userData.username);
                sessionStorage.setItem("userId", user.uid);
              } else {
                console.log("User data not found in Firestore");
              }
            } catch (error) {
              console.log("Error fetching user data from Firestore:", error);
            }
            getIdToken(user)
              .then((token) => {
                sessionStorage.setItem("userToken", token);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            router.replace("/sign-up");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    logout() {
      signOut(auth)
        .then(() => {
          sessionStorage.clear();
          this.isAuthenticated = false;
          // router.replace("/sign-up");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async resetUserPassword(payload) {
      const { email } = payload;
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
        console.log(error);
      }
    },

    //sign up & sign in with google
    signUpWithGoogle() {
      const router = useRouter();
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider).then((result) => {
        const user = result.user;
        const userData = {
          username: user.displayName,
          email: user.email,
          userId: user.uid,
        };
        Object.entries(userData).forEach(([key, value]) => {
          sessionStorage.setItem(`${key}`, value);
        });
        addDoc(collection(db, "users"), userData);
        // console.log(user);
        if (user) {
          this.isAuthenticated = true;
          sessionStorage.setItem("isAuthenticated", true);
        }
        setTimeout(() => {
          location.reload();
        }, 500);
        router.replace("/");
      });
    },

    signInWithGoogle() {
      const router = useRouter();
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider).then((result) => {
        const user = result.user;
        if (user) {
          this.isAuthenticated = true;
          sessionStorage.setItem("isAuthenticated", true);
        }
        const userData = {
          username: user.displayName,
          email: user.email,
          userId: user.uid,
        };
        Object.entries(userData).forEach(([key, value]) => {
          sessionStorage.setItem(`${key}`, value);
        });
        getDocs(collection(db, "users"), userData);
        setTimeout(() => {
          location.reload();
        }, 500);
        console.log(user);
        router.replace("/");
      });
    },
  },

  getters: {
    getUsername: (state) => state.firstName,
    getGoogleUsername: (state) => state.username,
    getUserEmail: (state) => state.email,
  },
});
