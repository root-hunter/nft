const fs = require('fs')
const {createCanvas} = require('canvas')
const Dictionary = require('./Dictionary')
const BackgroundColors = require('./BackgroundColors')

class Image{
    constructor() {
        this.initMeasure();
        this.initContext();
        this.initBackground();
        this.generateWords(3);
        this.save();
    }

    save() {
        const buffer = this.canvas.toBuffer('image/png')
        fs.writeFileSync('./gen_img/test' + Date.now() + '.png', buffer)
    }

    initBackground() {
        this.context.fillStyle = this.backgorundColors.getRandom().color

        this.context.fillRect(0, 0, this.width, this.height)
    }

    initContext() {
        this.dictionary = new Dictionary()
        this.backgorundColors = new BackgroundColors()
        this.canvas = createCanvas(this.width, this.height)
        this.context = this.canvas.getContext('2d')
    }

    initMeasure() {
        this.width = 1000
        this.height = 1000
        this.startY = 300
        this.startX = 120
    }

    generateWords(n) {
        this.words = []

        for (let k = 0; k < n; ++k) {
            this.words.push(this.dictionary.getRandom())
            this.words[k].init(this)
        }
    }
}

module.exports = Image