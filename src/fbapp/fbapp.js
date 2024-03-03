import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBfpeXAkd91hLOX-S3_jhWntqiZ0PCxWx4",
    authDomain: "arcaalbum.firebaseapp.com",
    projectId: "arcaalbum",
    storageBucket: "arcaalbum.appspot.com",
    messagingSenderId: "94661366049",
    appId: "1:94661366049:web:ee8f74ba720199e3dcee60",
    measurementId: "G-ZRGPLYW2NF"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);