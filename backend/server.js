import dotenv from "dotenv";
import mongoose from "mongoose";
import express, { json } from "express";
import cors from "cors";
import tokenVerification from './src/middleware/token.js'
import routes from "./src/routes/main.js";

dotenv.config({ path: "./.env" });



class Server {
    constructor() {
        this.app = express();
        this.serverPort = process.env.PORT || 4000;
        this.dbName = process.env.DB_NAME;
        this.mongoConnection;
        this._server;

        this.connectToDB();
        this.useMiddlewares();
        this.getRoutes();
        this.start();
    }

    async connectToDB() {
        const dbConnectionString = process.env.DATABASE_URL;

        try {
            this.mongoConnection = await mongoose.connect(dbConnectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } catch (error) {
            console.log(error);
            console.log("Connection to database failed. Try again...");
        }
    }

    useMiddlewares() {
        this.app.use(json());
        this.app.use(cors());
        // this.app.use(tokenVerification());
        this.app.use(async (req, res, next) => {
            if (req.headers["x-access-token"]) {
             const accessToken = req.headers["x-access-token"];
             const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
             // Check if token has expired
             if (exp < Date.now().valueOf() / 1000) { 
              return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
             } 
             res.locals.loggedInUser = await User.findById(userId); next(); 
            } else { 
             next(); 
            } 
           });
    }

    getRoutes() {
        routes(this.app);
    }

    start() {
        this._server = this.app.listen(this.serverPort, () => {
            console.log("Listening on port " + this.serverPort);
        });
    }

    close() {
        this.mongoConnection.connection.close();
        this._server.close();
    }
}

export default Server;