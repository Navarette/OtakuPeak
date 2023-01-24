export class User {
    constructor(
        public username: string,
        public email: string,
        public pwd: string,
        public id: number,
        public administrator : boolean = false,
    ) { }
    
}