import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCPrBtGrUN0DRNbkZ7CrlMwT3oNetlzsRA',
  authDomain: 'food-fd399.firebaseapp.com',
  databaseURL: 'https://food-fd399.firebaseio.com',
  projectId: 'food-fd399',
  storageBucket: 'food-fd399.appspot.com',
  messagingSenderId: '83151974009',
}

firebase.initializeApp(config)

export const authorization = firebase.auth()

export default firebase

export const provider = new firebase.auth.GoogleAuthProvider()
