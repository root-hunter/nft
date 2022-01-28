const fs = require('fs')

class RandomObject{
    getRandom(list){
        const i = Math.floor(Math.random() * list.length)
        return list[i]
    }

    loadList(filepath, Class){
        let tmp = JSON.parse(fs.readFileSync(filepath, "utf-8")).list
        let e = []

        for(let i = 0; i < tmp.length; ++i){
            e.push(new Class(tmp[i]))
        }

        return e
    }
}

module.exports = RandomObject