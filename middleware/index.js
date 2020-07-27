const errorHandler = (err, req, res, next) => {
    console.log(`err at ${req.method} ${req.url}`, err)
    res.sendStatus(500)
}

module.exports = { errorHandler }