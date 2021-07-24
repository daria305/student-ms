import dotenv from "dotenv";
import mongoose from "mongoose";
import express, { json } from "express";
import cors from "cors";
import routes from "./src/routes/main.js";
import jwt from 'jsonwebtoken';
import UserModel from "./src/models/user.js";
import CourseModel from "./src/models/course.js";

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
        console.log(`connection string: ${dbConnectionString}`);

        try {
            this.mongoConnection = await mongoose.connect(dbConnectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            });
        } catch (error) {
            console.log(error);
            console.log("Connection to database failed. Try again...");
        }
    }
    corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
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
             res.locals.loggedInUser = await UserModel.findById(userId); next(); 
            } else { 
             next(); 
            } 

        this.app.use(async (req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader('Access-Control-Allow-Methods', '*');
            res.setHeader("Access-Control-Allow-Headers", "*");
        })
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