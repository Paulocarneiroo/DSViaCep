export default function RequestException(message){
    return new Error(message);
}

RequestException.prototype = Object.create(Error.prototype);