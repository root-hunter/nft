const RandomObject = require("./RandomObject");
const Color = require('./Color')

class BackgroundColors extends RandomObject{
    constructor() {
        super();
        this.colors = this.loadList("./data/colors.json", Color)
    }

    getRandom(){
        return super.getRandom(this.colors)
    }
}

module.exports = BackgroundColors