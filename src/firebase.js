// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    query, 
    collection,
    getFirestore,
    where,
    getDocs,
    Timestamp,
    addDoc,
    orderBy
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4rUingZ6e3QSs1ZFI4Yu9WTps_D64FoM",
  authDomain: "where-s-waldo-37714.firebaseapp.com",
  projectId: "where-s-waldo-37714",
  storageBucket: "where-s-waldo-37714.appspot.com",
  messagingSenderId: "391761846945",
  appId: "1:391761846945:web:0e96066d70a858aaa1c6e0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const time = Timestamp;

const checkCoordinates = async (item, x, y) => {
    const q = query(collection(getFirestore(), 'items'), where('name', '==', item));

    const docs = await getDocs(q);
    let finalRes;
    docs.forEach((doc) => {
        let res = x > doc.data().minx && 
                x < doc.data().maxx &&
                y > doc.data().miny &&
                y < doc.data().maxy;
        
        finalRes = res;
    })
    return finalRes;
}

const addToLeaderboard = async (name, time) => {
    try {
        await addDoc(collection(getFirestore(), 'leaderboard'), {
            name: name,
            time: time
        })
    } 
    catch (error) {
        console.log("Error")
    }
}

const getLeaderboard = async () => {
    const q = query(collection(getFirestore(), 'leaderboard'), orderBy('time', 'asc'))
    const docs = await getDocs(q);

    let array = [];

    docs.forEach((doc) => {
        array.push({
            name: doc.data().name,
            time: doc.data().time
        })
    })

    return array;
}

export {checkCoordinates, time, addToLeaderboard, getLeaderboard}