const firebase = require('firebase')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDf3TCZi7IQ4GQKOnfA9k2HNQ_njAH-w3I",
    authDomain: "pruebag-220b6.firebaseapp.com",
    databaseURL: "https://pruebag-220b6-default-rtdb.firebaseio.com",
    projectId: "pruebag-220b6",
    storageBucket: "pruebag-220b6.appspot.com",
    messagingSenderId: "693624137151",
    appId: "1:693624137151:web:c676f73ce9ee620499ad0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   function Login(email, password){
//       firebase.auth().signInWithEmailAndPassword(email, password)
//       .then
//   }

//   function uploadImage(){
//       const ref = firebase.storage().ref()
//       const file = document.querySelector("#img").files[0]
//       const name= new Date() + '-' + file.name
//       const metadata ={
//           contentType:file.type
//       }
//       const task = ref.child(name).put(file,metadata)
//       task 
//       .then(
//           snapshot=> snapshot.ref.getDowloadURL()
//       )
//       .then( url=>{
//           console.log(url)
//           alert("Carga exitosa, status Ok")
//           const image= document.querySelector("#img")
//           image.src=url
//       }

//       )
//   }
