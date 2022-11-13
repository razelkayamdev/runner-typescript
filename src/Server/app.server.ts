import { ExpressServer } from "./express.server";

export class AppServer {

    private experssServer: ExpressServer;

    constructor() {
        this.experssServer = new ExpressServer({
            port: 3001
        });
    }

    public start() {
        this.experssServer.listen();
    }
}