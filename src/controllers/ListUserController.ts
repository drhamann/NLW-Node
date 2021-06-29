import { ListUserService } from "../services/ListUserService";
import { Request, Response } from "express";

export class ListUserController {

    async handle(request: Request, response: Response) {

        const { } = request.body;

        const listuserService = new ListUserService();

        const user = await listuserService.execute();

        return response.json(user);

    }

}