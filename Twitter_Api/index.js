//Callback version
const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker_ajax"));
app.get("/data.json", (req, res) => {


    getToken((err, bearerToken) => {
        if (err) {
            console.log("err getting bearerToken.: ", err);
            return
        }
        // console.log(" in indexjs bearerToken", bearerToken);

        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err getting tweets", err);
                return
            }
            // console.log(tweets);
            const filteredTweets = filterTweets(tweets);

            res.json(filteredTweets);
        })

    });

})

app.listen(8080, () => console.log("Server Listening"))