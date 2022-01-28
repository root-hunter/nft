const fs = require('fs')
const {registerFont} = require('canvas')
const RandomObject = require('./RandomObject')

class Fonts extends RandomObject{
    list = []

    constructor() {
        super()
        this.loadFont()
    }

    loadFont(){
        let files = fs.readdirSync("./fonts/")

        for(let i = 0; i < files.length; ++i){
            let fontName = files[i].split(".")[0]

            registerFont("./fonts/"+files[i], {family: fontName})
            this.list.push(fontName)
        }
        console.log("ALL FONTS ARE ADDED")
    }

    getRandom() {
        return super.getRandom(this.list);
    }
}

module.exports = Fonts