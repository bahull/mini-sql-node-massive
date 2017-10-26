const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require ('./controller');


const app = express();
require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    //Typically tables are not created here...
    // dbInstance.create_table().then(c => console.log(c))
    //Adding planes to our Database
    // dbInstance.new_planes();

    app.set('db', dbInstance);
// Added controller to handles this request
    // dbInstance.get_planes().then(cur => {
    //     console.log(planes)
    // }).catch(err => console.log(err))
});

app.get('/api/airplanes/:id', (req, res)=>{
    const db = req.app.get('db');
    db.get_planes([req.params.id]).then((response) => {
        return res.status(200).json(response);
    })
})

app.get('/api/planes/', controller.getPlanes)

app.use( bodyParser.json() );
app.use( cors() );
const port = process.env.PORT || 3000

app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

