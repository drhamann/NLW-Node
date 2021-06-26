import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {

    async handle(request: Request, response: Response) {

        const { name, email, admin } = request.body;

        const createuserService = new CreateUserService();

        const user = await createuserService.execute({ name, email, admin });

        return response.json(user);

    }

}