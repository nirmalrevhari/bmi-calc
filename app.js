const express = require('express');
const app = express();
const port = 5000;
const bmiController = require('./bmi-calculator');

app.use(express.json({limit: '1000mb'}));
app.post('/bmi', function (req, res) {
    let body = req.body;
    let start = Date.now();
    console.log("Request received")
    try {
        let op = bmiController.bmiCalc(body);

        console.log("Request server. Time taken", Date.now() - start);
        res.send(op);
    }
    catch (e) {
        res.status(404);
        res.send(e);
    }
});

app.listen(port, function () {
    console.log("\nServer is running on port " + port);
});
module.exports = app;