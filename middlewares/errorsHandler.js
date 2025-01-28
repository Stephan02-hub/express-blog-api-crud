const errorsHandler = (err, req, res, next) => {
    res.status(500).json({
        massage: err.message,
    })

}
module.exports = errorsHandler