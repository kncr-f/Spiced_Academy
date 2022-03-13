
const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker_ajax"));
app.get("/data.json", (req, res) => {


    getToken()
        .then(token => {
            Promise.all([
                getTweets(token, "Drake"),
                getTweets(token, "Beyonce"),
                getTweets(token, "talorswift13")
            ])
                .then(results => {

                    const mergedResults = [...results[0], ...results[1], ...results[2]];

                    const sortedResults = mergedResults.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);

                    });

                    console.log("sortedResults: ", sortedResults);
                    const filteredTweets = filterTweets(sortedResults);
                    res.json(filteredTweets);

                }).catch(err => {
                    console.log("err", err)
                })

        })
        .catch((error) => {
            console.log("Error getting BearerToken", error);
            res.sendStatus(500)

        })


});

app.listen(8080, () => console.log("Twitter_Api_part_2_Server Listening"))