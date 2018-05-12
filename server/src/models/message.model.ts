export class User {
    constructor(private id: number, private name: string) {};
}

export class Message {
    constructor(private from: User, private content: string) {};
}