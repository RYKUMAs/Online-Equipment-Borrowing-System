async function Hello(req, res) {
    return res.status(200).send({
        result: "ok",
        data: "Hello World!"
    });
}

export default Hello;