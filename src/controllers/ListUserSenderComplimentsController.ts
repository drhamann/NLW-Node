import {Request, Response } from "express"
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

export class ListUserSenderComplimentsController {
    
    async handle(request: Request, response: Response){
        const {  user_id} = request.body;
        const listUserSenderComplimentsService = new ListUserSenderComplimentsService();

        const users = await listUserSenderComplimentsService.execute(user_id);

        return response.json(users);
    }
}