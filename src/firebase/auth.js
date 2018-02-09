import { auth } from './firebase';

//sign up
export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

//signIn
export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

//signOut

export const doSignOut = () => auth.signOut();

//password reset
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

//password change
export const doPasswordUpdate = (password) => auth.correntUser.updatePassword(password);
