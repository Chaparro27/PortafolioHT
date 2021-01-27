const admin = require("firebase-admin");

const serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://videogames-3b283-default-rtdb.firebaseio.com"
});

const db = admin.firestore();
const storage = admin.storage();
const auth = admin.auth();


module.exports = {db, storage, auth};