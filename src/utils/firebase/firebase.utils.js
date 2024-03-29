// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, doc, getDoc, getDocs, setDoc, collection, writeBatch, query} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlX8HSQ_j1H7RvlDL7TO93P_uJLKyUyxY",
  authDomain: "e-commerce-clothing-db-af600.firebaseapp.com",
  projectId: "e-commerce-clothing-db-af600",
  storageBucket: "e-commerce-clothing-db-af600.appspot.com",
  messagingSenderId: "671793871955",
  appId: "1:671793871955:web:6c60a6b23e41ac0a041aa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  //console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  //console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const SignOutUser = async (auth) => {
  signOut(auth);
}

//Ghi gọi hàm onAuthStateChangedHandler => Gọi onAuthStateChanged, 
//nó sẽ kiểm tra auth có thay đổi không, nếu có thì gọi hàm callback được truyền vào
export const onAuthStateChangedHandler = (callBack) => {
  onAuthStateChanged(auth, callBack) //Hàm này trả về UserImpl truyền vào hàm callBack
}
  