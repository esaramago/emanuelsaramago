// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARO1b9m0tN_SauZPnpgTFc_zjs-ESbMBE',
  authDomain: 'emanuelsaramago-7866e.firebaseapp.com',
  projectId: 'emanuelsaramago-7866e',
  storageBucket: 'emanuelsaramago-7866e.appspot.com',
  messagingSenderId: '693106409316',
  appId: '1:693106409316:web:51c9f43f6ec32e566f0471',
  measurementId: 'G-GY7BYJ0SZ2'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)