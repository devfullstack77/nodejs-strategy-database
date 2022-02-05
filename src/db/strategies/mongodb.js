const ICrud = require("./interfaces/ICrud")

class MongoDb extends ICrud {
    constructor() {
        super()
    }
    create(item) {
        console.log('Item salvo MongoDb')
    }
}

module.exports  = MongoDb
