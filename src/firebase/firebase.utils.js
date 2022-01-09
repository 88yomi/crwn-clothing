import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAD3i3Cu2X3DzOxJSWAFzocGbP62N5BqHQ",
	authDomain: "crwn-db-6a66a.firebaseapp.com",
	projectId: "crwn-db-6a66a",
	storageBucket: "crwn-db-6a66a.appspot.com",
	messagingSenderId: "104483168219",
	appId: "1:104483168219:web:0cfd4311a7b7ea148a11fe"
};
 
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}

return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;