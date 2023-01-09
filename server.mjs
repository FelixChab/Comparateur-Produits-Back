import express from 'express';
import { initDatabase } from './database/initDatabase.mjs';
import {indexRoutes} from "./routes/index.routes.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// SETUP ROUTES
app.use('/', new indexRoutes());

// INITIALIZE DATABSE
initDatabase();

// LAUNCH SERVER

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
