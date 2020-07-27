const app = require('express')()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');
const { errorHandler } = require('./middleware')

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        throw err
    }

    const db = client.db('testDB')
    
    const customers = db.collection('customers')

    app.use(bodyParser.json())

    require('./routes/customers')(app, customers)

    app.use(errorHandler)

    app.listen('8002')

})
