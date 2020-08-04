import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyB8fvmZC7hIQVFlny0R-p6Y9tbn0wIpclk",
  authDomain: "bento-c1d50.firebaseapp.com",
  databaseURL: "https://bento-c1d50.firebaseio.com",
  projectId: "bento-c1d50",
  storageBucket: "bento-c1d50.appspot.com",
  messagingSenderId: "527599801375",
  appId: "1:527599801375:web:c4003e7d75a5a6e6abb12a",
  measurementId: "G-LN05PBW6G5"
}

firebase.initializeApp(config)
