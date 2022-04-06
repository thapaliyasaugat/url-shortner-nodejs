import express from "express"
import { Express } from "express";
import dotenv from "dotenv"
import { env } from "process";
class Server {
    private app: Express;
    constructor() {
        this.app = express();
        this.setupConfiguration();
        this.setupRoutes();
    }

    private setupConfiguration(): void {
        dotenv.config();
        this.app.use(express.json());
    }
    private setupRoutes() {

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