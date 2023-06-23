import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyB2x3VkP8WdM9VBc-wzI4GCjcfI5NyvOQQ",

  authDomain: "meesho-21321.firebaseapp.com",

  databaseURL: "https://meesho-21321-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "meesho-21321",

  storageBucket: "meesho-21321.appspot.com",

  messagingSenderId: "864052292379",

  appId: "1:864052292379:web:6c56a256b456a57ac501be"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth()
export{app,auth}
export default firebaseConfig