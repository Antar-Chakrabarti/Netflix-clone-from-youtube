import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain:process.evn.REACT_APP_AUTHDOMAIN,
    projectId: process.evn.REACT_APP_PROJECTID,
    storageBucket: process.evn.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.evn.REACT_APP_MESSAGINGSENDERID,
    appId: process.evn.REACT_APP_APPID,
    measurementId: process.evn.REACT_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;