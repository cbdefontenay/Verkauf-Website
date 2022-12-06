import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
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
  console.log(firebaseApp)
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={displayName:''}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShop = await getDoc(userDocRef)

    if (!userSnapShop.exists()){
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
          ...additionalInformation
        });
      } catch (error){

      }
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }