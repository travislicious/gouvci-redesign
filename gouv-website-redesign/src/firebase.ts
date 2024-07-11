import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXa3uB2mQXF02LJawYHNrKz9XvIHOLK8U",
  authDomain: "gouv-webdata.firebaseapp.com",
  projectId: "gouv-webdata",
  storageBucket: "gouv-webdata.appspot.com",
  messagingSenderId: "836020715247",
  appId: "1:836020715247:web:0d57face09ef4f07f6651a",
  measurementId: "G-ND9XE9Q7BF"
  };

  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);