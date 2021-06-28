import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const admin = true;

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "7a279e6d5802d03fe81dfbfa49091ef6") as IPayload;

        request.user_id = sub;

        return next();
    } catch (err) {
        return unauthorized(response, "erro");
    }

}

function unauthorized(response: Response, errorMessage: string) {
    return response.status(401).json({
        error: errorMessage,
    });
}