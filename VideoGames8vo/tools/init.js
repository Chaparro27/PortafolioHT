const admin = require("firebase-admin");
var serviceAccount = require("../tools/pruebag-220b6-firebase-adminsdk-g3auo-e88a98993b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pruebag-220b6-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();
const storage = admin.storage().bucket('images');
const auth = admin.auth();


module.exports = {db, storage, auth};