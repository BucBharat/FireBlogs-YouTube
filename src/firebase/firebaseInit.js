import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAHXHnnNCMBK-Wnu9erFNlCaQmVJNmM_qg',
  authDomain: 'blogsappvue.firebaseapp.com',
  projectId: 'blogsappvue',
  storageBucket: 'blogsappvue.appspot.com',
  messagingSenderId: '759735919254',
  appId: '1:759735919254:web:8c72c98335634713ecd8b7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { timestamp };

export default firebaseApp.firestore();
