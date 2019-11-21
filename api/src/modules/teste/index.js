const axios = require("axios");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://godev-9aad7.firebaseio.com"
});
module.exports = async (req, res) => {
  console.log("Route postagem/teste");

  // The app only has access as defined in the Security Rules
  var db = admin.database();
  var ref = db.ref("/postagem");
  ref.once("value", function(snapshot) {
    console.log(snapshot.val());
  });

  res.status(200).json({ teste: "teste" });
};
