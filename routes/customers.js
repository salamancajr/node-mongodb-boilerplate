const { ObjectId } = require("mongodb")

module.exports = (app, customers) => {
    app.get('/test', async (req, res, next) => {
        try {
            const resCustomers = await customers.find().toArray() 
            res.send(resCustomers)
        } catch (e) {
            next(e)        
        }
    })

    app.post('/test', async (req, res, next) => {
        try {
            await customers.insertOne(req.body)
            res.sendStatus(200)
        } catch(e) {
            next(e)
        }
    })

    app.patch('/test', async (req, res, next) => {
        const { _id: tempId, hello } = req.body
        try {
            const _id = ObjectId(tempId)
            await customers.findOneAndUpdate({ _id }, { $set: { hello } })
            res.sendStatus(200)
        } catch(e) {
            next(e)
        }
    })

    app.delete('/test', async (req, res, next) => {
        try {
            await customers.deleteOne(req.body)
            res.sendStatus(200)
        } catch(e) {
            next(e)
        }
    })
}