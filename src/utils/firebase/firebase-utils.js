import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopUp, GoogleAuthProvider } from 'firebase/auth';
import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA0ZNZh_Y73EmgVeHRM1mlLgdiXu9k6gd8",
    authDomain: "crwn-clothing-db-9fa62.firebaseapp.com",
    projectId: "crwn-clothing-db-9fa62",
    storageBucket: "crwn-clothing-db-9fa62.appspot.com",
    messagingSenderId: "780632979263",
    appId: "1:780632979263:web:bfa228eb2fc0b81f0e858a"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopUp(auth, provider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShop = await getDoc(userDocRef)
  }