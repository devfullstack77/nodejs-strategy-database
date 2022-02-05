const ICrud = require("./interfaces/ICrud")

class Postgres extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('Item salvo Postgres')
    }
}

module.exports = Postgres
