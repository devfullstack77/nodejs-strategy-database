const ContextStrategy = require("./src/db/strategies/base/contextStrategy")
const MongoDb = require("./src/db/strategies/mongodb")
const Postgres = require("./src/db/strategies/postgres")

const contextMongo = new ContextStrategy(new MongoDb())

contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())

contextPostgres.create()
