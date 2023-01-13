import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {indexRoutes} from "./routes/index.routes.mjs";
import {db} from "./models/index.mjs";
import {usersRoutes} from "./routes/users.routes.mjs";
import {productsRoutes} from "./routes/products.routes.mjs";
import { categoriesRoutes } from './routes/categories.routes.mjs';
import {initData} from "./db_data.mjs";
import {characteristicsRoutes} from "./routes/characteristics.routes.mjs";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.use(express.json({limit: '50mb'}));
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// SETUP ROUTES
app.use('/', new indexRoutes());
app.use('/users', new usersRoutes());
app.use('/products', new productsRoutes());
app.use('/category', new categoriesRoutes());
app.use('/characteristics', new characteristicsRoutes());

// INITIALIZE DATABASE
db.sequelize.sync({force:true})
    .then(() => {
        initData().then(r => console.log("data initialized successfully"));
        console.log("Synced db.");
})
    .catch((err) => {
        console.log("Failed to sync db: "+ err.message);
    });


// LAUNCH SERVER

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
