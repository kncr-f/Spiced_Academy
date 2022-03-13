const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets.json");


module.exports.getToken = () => {
    return new Promise((resolve, reject) => {
        const creds = `${twitterKey}:${twitterSecret}`;
        const encodedCreds = Buffer.from(creds).toString("base64");

        const config = {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"

            }
        };
        function httpsRequestCallback(res) {
            if (res.statusCode !== 200) {
                reject(res.statusCode)
                return;
            }

            let body = "";
            res.on("data", chunk => body += chunk);
            res.on("end", () => {

                const parsedBody = JSON.parse(body);

                parsedBody.access_token ? resolve(parsedBody.access_token) : reject(new Error("Token is not here"));

            })


        }
        const req = https.request(config, httpsRequestCallback);

        req.end("grant_type=client_credentials");

    })

};

module.exports.getTweets = (bearerToken, screen_name) => {

    return new Promise((resolve, reject) => {
        const authorization = "Bearer " + bearerToken;
        const config = {
            method: "GET",
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${screen_name}&tweet_mode=extended`,
            headers: { Authorization: authorization }
        };
        function httpsRequestCallback(res) {
            if (res.statusCode !== 200) {
                reject(res.statusCode);
                return;
            }

            let body = "";
            res.on("data", chunk => body += chunk);
            res.on("end", () => {
                const tweets = JSON.parse(body);
                tweets ? resolve(tweets) : reject(new Error("Error getting Tweets"));

            })

        }

        const req = https.request(config, httpsRequestCallback);
        req.end("grant_type=client_credentials");

    })


};

module.exports.filterTweets = (tweets) => {
    let modifiedTweets = [];
    for (let i = 0; i < tweets.length; i++) {

        if (tweets[i].entities.urls.length == 1) {
            let full_text = tweets[i].full_text;
            let modifiedFull_text = "";

            modifiedFull_text = full_text.replace(tweets[i].entities.urls[0].url, "");

            if (tweets[i].entities.media) {
                console.log("media: ", tweets[i].entities.media);

                modifiedFull_text = modifiedFull_text.replace(tweets[i].entities.media[0].url, "");

            }
            const tickerText = `${tweets[i].user.screen_name} : ${modifiedFull_text}`;

            modifiedTweets.push({
                myText: tickerText,
                link: tweets[i].entities.urls[0].url
            })

        }

    }
    return modifiedTweets;

}