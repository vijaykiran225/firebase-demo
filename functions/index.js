const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const express = require('express');

let app = express();

app.get("/api/txn/:id", (req, res) => {

    let respo = {
        from: Math.floor((Math.random() * 10000) + 1),
        to: Math.floor((Math.random() * 10000) + 1),
        amount: Math.floor((Math.random() * 1000)),
        id: req.params.id
    }
    res.json(respo);
})
exports.api = functions.https.onRequest(app);
