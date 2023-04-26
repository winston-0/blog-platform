export default class CustomError extends Error {
    constructor(body) {
        super();
        this.body = body
    }
}

