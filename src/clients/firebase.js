// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, getDocs, collection } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtJNxp8cHZKX7DulA5ju_Czcpu2EtRFHc",
  authDomain: "megatron-website.firebaseapp.com",
  projectId: "megatron-website",
  storageBucket: "megatron-website.appspot.com",
  messagingSenderId: "460579232975",
  appId: "1:460579232975:web:a010c67aa5692b00ef2bba",
  measurementId: "G-5B659KQDYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);


// Add new client document
const addClient = async function (budget, desc, email, service, user_name) {
  try {
    const docRef = await addDoc(collection(db, "clients"), {
      budget: budget,
      description: desc,
      email: email,
      service: service,
      "user name": user_name
    }).then(() => {
      // Also add the email to email_list document
      addEmail(email)
    })

    console.log("Document written with ID: ", docRef.id);

    return docRef
  } catch (e) {
    console.log("Error adding document: ", e);
    return e
  }

}

// Get all clients documents
const getClientsData = async function () {
  const querySnapshot = await getDocs(collection(db, "clients"));

  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc.data())
  }); 
  querySnapshot((res) => {
    console.log(res)
  })
}

// Add new email_list document
const addEmail = async function (email) {
  try {
    const docRef = await addDoc(collection(db, "email_list"), {
      email: email
    });
  
    console.log("Document written with ID: ", docRef.id);
    return docRef
  } catch (e) {
    console.log("Error adding document: ", e);
    return e
  }
}

// Get all email_list documents
const getEmailsData = async function () {
  const querySnapshot = await getDocs(collection(db, "email_list"));

  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc.data())
  }); 
}

export default { addClient, getClientsData, addEmail, getEmailsData }