const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello function from Firebase!");
});
exports.helloWorldTwo = functions.https.onRequest((request, response) => {
    response.send("Hello 2 function from Firebase!");
});
exports.helloWorldThree = functions.https.onRequest((request, response) => {
    response.send("Hello 3 function from Firebase!");
});
