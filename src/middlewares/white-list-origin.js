import cors from 'cors'
import {
    cfg
} from '../config';

let checkOriginAgainstWhitelist = (req, res) => {
    console.log(req)
    const requestOrigin =  req.get("origin")
    if (cfg('WHITELIST').includes('*')) {
        return '*';
    }
    if (!cfg('WHITELIST').includes(requestOrigin)) {
        if (requestOrigin.search(/(http|https)/) === 0) {
            return ctx.throw(`${requestOrigin} is not a valid origin`);
        } else { //allow if it is an application. not web page
            return null;
        }
    }
    return requestOrigin;
}

export default cors({
    origin: checkOriginAgainstWhitelist
});