export default function handler(req, res) {
    const params = req.query.params
    console.log(params)
    res.send(200).json(params)
}