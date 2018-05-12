import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketio from 'socket.io';
import { Message } from './models/message.model';

export class Chatserver {
    public static readonly PORT: number = 5000;
    private app: express.Application;
    private server;
    private port: string | number;
    private io: socketio.Server;

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || Chatserver.PORT;
    }

    private sockets(): void {
        this.io = socketio(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, (err) => {
            if (err) {
                return console.log("There was an error: ", err);
            }
            console.log("Server is listening on %s", this.port);   
        });

        this.io.on('connect', (socket: any) => {
            console.log("Connected to a client on port %s", this.port);

            socket.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}