import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDx2pTaN2_iDh_R-ilDn-brvDRYDSkWY8g",
  authDomain: "pizzas-8420d.firebaseapp.com",
  databaseURL: "https://pizzas-8420d.firebaseio.com",
  projectId: "pizzas-8420d",
  storageBucket: "pizzas-8420d.appspot.com",
  messagingSenderId: "936053928355"
};
firebase.initializeApp(config);

const auth = firebase.auth();

export {
  auth
};
