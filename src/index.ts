import { AppServer } from "./Server/app.server";

function start() {
    const server = new AppServer();
    server.start();
}

start();