import express from "express"
import { Express } from "express";
import dotenv from "dotenv"
import urlController from "./controller/url.controller";
import { createConnection } from "typeorm";
import Url from "./model/url.model";
class Server {
    private app: Express;
    constructor() {
        this.app = express();
        this.setupConfiguration();
        this.setupRoutes();
    }

    public setupConfiguration(): void {
        dotenv.config();
        this.app.use(express.json());
    }
    public async setupRoutes(): Promise<void> {
        await createConnection({
            name: "url",
            type: "mysql",
            host: process.env.DB_HOST,
            port: 3306,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            synchronize: true,
            entities: [Url]
        })
            .then(() => { console.log("database connected") }).catch(() => {
                console.log("error connecting db")
            })
        this.app.use("/shorten", new urlController().getRouter())
    }
    public start(): void {
        const PORT = process.env.PORT || 8000
        this.app.listen(PORT, () => {
            console.log(`server started at ${PORT}`)
        })
    }
}
const server = new Server();
//start server
server.start();