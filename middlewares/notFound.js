const notFound = (req,res) => {
    res.status(404).json({
        massage: "Route not found",
    })

}
module.exports = notFound