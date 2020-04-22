import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyBcH8th7y_labuiihdYOFVHHkO_mWItdoM",
        authDomain: "home-brew-bf84a.firebaseapp.com",
        databaseURL: "https://home-brew-bf84a.firebaseio.com",
        projectId: "home-brew-bf84a",
        storageBucket: "home-brew-bf84a.appspot.com",
        messagingSenderId: "620382920154",
        appId: "1:620382920154:web:8483f94a066302bdf3b4e3",
        measurementId: "G-GSY9384NH8"
    })
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }