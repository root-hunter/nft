const Fonts = require('./Fonts')
const fontsList = new Fonts();

class Word{
    constructor(text) {
        this.text = text
        this.size = 250
        this.font = fontsList.getRandom()
    }

    init(image){
        const maxWidth = (image.width - (image.startX + this.size))

        image.context.font = String(this.size)+'pt '+String(this.font)
        image.context.fillStyle = "#000"
        image.context.fillText(this.text, image.startX, image.startY, maxWidth)
        image.startY += 250
    }
}

module.exports = Word