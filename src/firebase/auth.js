import { authorization } from './firebase'

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  authorization.createUserWithEmailAndPassword(email, password)

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  authorization.signInWithEmailAndPassword(email, password)

// Sign out
export const doSignOut = () => authorization.signOut()

// Password Reset
export const doPasswordReset = email =>
  authorization.sendPasswordResetEmail(email)

// Password Change
export const doPasswordUpdate = password =>
  authorization.currentUser.updatePassword(password)
