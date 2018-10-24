import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBl6t-0z4WwwS2d3qVmXkNuX5FPgCrLAp4",
    authDomain: "mua-bon-app.firebaseapp.com",
    databaseURL: "https://mua-bon-app.firebaseio.com",
    projectId: "mua-bon-app",
    storageBucket: "mua-bon-app.appspot.com",
    messagingSenderId: "37051002696"
  };
  const fire = firebase.initializeApp(config);
  export default fire;