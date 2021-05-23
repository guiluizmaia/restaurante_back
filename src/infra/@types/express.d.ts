declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };
        connecteds: {
            [key: string]: string;
        };
        rooms: {
            [key: string]: Map<string, string>;
        };
        io: import('socket.io').Server;
    }
}
