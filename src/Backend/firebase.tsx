import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB8hEUXvck8139nlNLbYQ46scK0wyBuUXw",
	authDomain: "event-cb751.firebaseapp.com",
	projectId: "event-cb751",
	storageBucket: "event-cb751.appspot.com",
	messagingSenderId: "671549658896",
	appId: "1:671549658896:web:7ccd5a7c5d2cc5bcdcb795",
	measurementId: "G-2F4VWDFKT2",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
