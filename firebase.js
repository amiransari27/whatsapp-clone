import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCt_dxoM0YFMoIy5NJetzdrWNNQGB0EHH0",
    authDomain: "whatsapp-4ab14.firebaseapp.com",
    projectId: "whatsapp-4ab14",
    storageBucket: "whatsapp-4ab14.appspot.com",
    messagingSenderId: "458899570686",
    appId: "1:458899570686:web:2e33830eb1cf4afe674aaf"
}

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }