module.exports = {

    getPlanes: (req, res, next)=>{
        const dbInstance = req.app.get('db');

        dbInstance.get_planes([25])
        .then(planes => { res.status(200).json(planes);})
        .catch(err => {
             res.status(500).json(err);
            })
    }

}