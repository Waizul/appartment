import { useEffect, useState } from 'react';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import firebaseAuthentication from '../firebase/firebase.config';

firebaseAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [authError, setAuthError] = useState('');
	const [admin, setAdmin] = useState({});
	const auth = getAuth();

	const registerUser = (email, password, name, history) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const newUser = { email, displayName: name };
				setUser(newUser);
				saveUser(email, name, 'post');
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
				setAuthError('');
				history.replace('/');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setLoading(false));
	};

	const logIn = (email, password, history, location) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const signedUser = result.user;
				saveUser(signedUser.email, signedUser.displayName, 'put');
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setLoading(false));
	};

	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = (history, location) => {
		setLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const signedUser = result.user;
				setUser(signedUser);
				saveUser(signedUser.email, signedUser.displayName, 'put');
				const destination = location?.state?.from || '/';
				history.replace(destination);
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setLoading(false));
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {});
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				// User is signed out
				setUser({});
			}
			setLoading(false);
		});
		return () => unsubscribed;
	}, [auth]);

	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch('https://dry-falls-36649.herokuapp.com/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then();
	};

	useEffect(() => {
		fetch(`https://dry-falls-36649.herokuapp.com/users/${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				setAdmin(data.admin);
			});
	}, [user?.email]);

	return {
		user,
		registerUser,
		admin,
		logIn,
		signInUsingGoogle,
		logOut,
		loading,
		authError,
	};
};
export default useFirebase;
