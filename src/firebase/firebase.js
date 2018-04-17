import * as firebase from 'firebase'

const prodConfig = {
  apiKey: 'AIzaSyCPrBtGrUN0DRNbkZ7CrlMwT3oNetlzsRA',
  authDomain: 'food-fd399.firebaseapp.com',
  databaseURL: 'https://food-fd399.firebaseio.com',
  projectId: 'food-fd399',
  storageBucket: 'food-fd399.appspot.com',
  messagingSenderId: '83151974009',
}

const devConfig = {
  apiKey: 'AIzaSyCPrBtGrUN0DRNbkZ7CrlMwT3oNetlzsRA',
  authDomain: 'food-fd399.firebaseapp.com',
  databaseURL: 'https://food-fd399.firebaseio.com',
  projectId: 'food-fd399',
  storageBucket: 'food-fd399.appspot.com',
  messagingSenderId: '83151974009',
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export { auth }
