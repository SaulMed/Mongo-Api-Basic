import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import './database/db.js';

//Swagger
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from './swaggerOptions.js';

//Rotues
import routesUser from './routes/user.routes.js';
import routesProduct from './routes/product.routes.js';



//Config
const app = express();
app.set('PORT', process.env.PORT || 3030);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerOptions)));

//Routes
app.use('/api',routesUser);
app.use('/api',routesProduct);

app.use((req, res) => {
    res.status(404).json({
        status: "Route Not Found."
    })
})

export default app;