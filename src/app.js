import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import './database/db.js';

//Rotues
import routesUser from './routes/user.routes.js';

const app = express();

//Config
app.set('PORT', process.env.PORT || 3030);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use(routesUser);

app.use((req,res)=>{
    res.status(404).json({
        status: "Route Not Found."
    })
})

//Start
app.listen(app.get('PORT'), (req, res) => {
    console.log("Server on port " + app.get('PORT'))
});