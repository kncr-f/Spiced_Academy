const readline = require("readline");

const gameInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const game = {
    question: "Welcome! Would you like to play? yes/no",
    answers: {
        yes: {
            question: "Are you ready to be the best Developer in the World? yes/no",
            answers: {
                yes: {
                    question: " Are you sure ?",
                    answers: {
                        yes: {
                            question: "You're not really sure but are you pretending to be? yes/no",
                            answers: {
                                yes: "congratulation you are the best developer ever",
                                no: "but you should"

                            }
                        },
                        no: "You are done here good bye"

                    }
                },
                no: "This was not the right choice. Goodbye!"
            }
        },
        no: "Allright then. Enjoy your day!"
    }
};

function playGame(game) {

    gameInterface.question(game.question, (answer) => {
        console.log("answer: ", answer);

        if (answer in game.answers) {

            //stop condition
            if (typeof game.answers[answer] === "string") {
                console.log(game.answers[answer])
                gameInterface.close();
            } else {
                //resursive call update it again with substory
                playGame(game.answers[answer])

            }
        } else {
            console.log("please cooperate")
            playGame(game)
        }


    });


}

playGame(game)



