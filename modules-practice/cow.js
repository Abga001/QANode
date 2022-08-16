const cows = require("cowsay");


/*console.log(cowsay.talk({
    text : "I'm a mooo",
    e : "oO",
    T : "U "
}));*/

module.exports.talk = (text) => cows.say({'text': text}); 