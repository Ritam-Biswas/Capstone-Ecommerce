import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

const firebaseConfig = {
apiKey: "AIzaSyAmYLo9Hht_IlSOBFXYN4aDCoSUkzMIVEA",
authDomain: "capstone-db-9f78c.firebaseapp.com",
projectId: "capstone-db-9f78c",
storageBucket: "capstone-db-9f78c.appspot.com",
messagingSenderId: "697660380955",
appId: "1:697660380955:web:665701fa4140a0defde5be"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    promt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object)
    })

    batch.commit();
    console.log("done");
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,"categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{})

    return categoryMap;
}


export const createUserDocumentFromAuth = async (userAuth,additionalInfo={}) => {

    if(!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                Name : displayName,
                Email : email,
                CreatedAt : createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log(`There was error creating the document\nerror - ${error}`)
        }
    }

    return userDocRef;
}

export const createUserDocumentFromEmailandPassword = async (email, password) => {
    
    if(!email || !password){ 
        return;
    }

    try {
        return await createUserWithEmailAndPassword(auth,email,password);   
    } catch (error) {
        console.log(error)
    }

}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {

    if(!email || !password){ 
        return;
    }

    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth,callback); 


