import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {

    async handle(request: Request, response: Response) {

        const { name, email, admin, password } = request.body;

        const createuserService = new CreateUserService();

        const user = await createuserService.execute({ name, email, admin, password });

        return response.json(user);

    }

}