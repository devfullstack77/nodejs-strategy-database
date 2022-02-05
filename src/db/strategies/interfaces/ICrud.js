class NotImplementerdexception extends Error {
    constructor() {
        super("Not Implemented Exception")
    }
}

class ICrud {

    create(item) {
        throw new NotImplementerdexception()
    }

    read(query) {
        throw new NotImplementerdexception()
    }

    update(id, item) {
        throw new NotImplementerdexception()
    }

    delete(id) {
        throw new NotImplementerdexception()
    }

}

module.exports = ICrud
