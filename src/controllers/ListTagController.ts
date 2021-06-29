import { ListTagService } from "../services/ListTagService";
import { Request, Response } from "express";

export class ListTagController {

    async handle(request: Request, response: Response) {

        const { name} = request.body;

        const listtagService = new ListTagService();

        const tag = await listtagService.execute();

        return response.json(tag);

    }

}