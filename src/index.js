import express from "express";
import ratesRoute from "./route.js";
import swaggerUI from "swagger-ui-express";
import {specs} from "./utils/swaggerOptions.js";
import cors from "cors";

const PORT = 5001;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/rates', ratesRoute);
app.use('/api', swaggerUI.serve, swaggerUI.setup(specs));

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();