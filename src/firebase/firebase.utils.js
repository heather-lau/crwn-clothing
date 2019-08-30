import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAndWZcGIC_VW0smgX5ZxdCR2V4ca281KM",
  authDomain: "crwn-db-e4a22.firebaseapp.com",
  databaseURL: "https://crwn-db-e4a22.firebaseio.com",
  projectId: "crwn-db-e4a22",
  storageBucket: "",
  messagingSenderId: "704942062526",
  appId: "1:704942062526:web:0579295b8ee7297d"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase