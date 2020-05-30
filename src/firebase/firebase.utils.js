import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAYEC4GkzGP6wFuPC43OK6GRYXohbO_HDE",
    authDomain: "crwn-db-d3b6e.firebaseapp.com",
    databaseURL: "https://crwn-db-d3b6e.firebaseio.com",
    projectId: "crwn-db-d3b6e",
    storageBucket: "crwn-db-d3b6e.appspot.com",
    messagingSenderId: "689266738464",
    appId: "1:689266738464:web:ca9f58f5888b15d9350345",
    measurementId: "G-L3PFR09VDF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })//.set is the create method
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




