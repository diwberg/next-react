export default (req, res) => {

    res.status(200).json({requisicao: req.method})

    console.log(req)
    console.log(res)

}