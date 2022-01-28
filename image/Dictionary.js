const Word = require("./Word");
const RandomObject = require('./RandomObject')

class Dictionary extends RandomObject{
    constructor() {
        super();
        this.words = this.loadList("./data/words.json", Word)
    }

    getRandom(){
        return super.getRandom(this.words)
    }
}

module.exports = Dictionary