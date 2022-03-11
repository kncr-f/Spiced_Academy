// Promise Version 

const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker_ajax"));
app.get("/data.json", (req, res) => {


    getToken()
        .then((bearerToken) => {
            //console.log("BearerToken", bearerToken);
            getTweets(bearerToken)
                .then((tweets) => {
                    // console.log("Tweets", tweets);
                    const filteredTweets = filterTweets(tweets);
                    res.json(filteredTweets);

                }).catch((error) => console.log("Error getting Tweets", error))

        }).catch((error) => console.log("Error getting BearerToken", error))



});

app.listen(8080, () => console.log("Server Listening")) 