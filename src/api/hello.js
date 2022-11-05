import {get} from "./request.js";

export const sayHello = () => {
    return get('/hello')
}