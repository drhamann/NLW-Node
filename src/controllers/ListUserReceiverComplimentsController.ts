import {Request, Response } from "express"
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

export class ListUserReceiverComplimentsController {
    
    async handle(request: Request, response: Response){
        const {  user_id} = request.body;
        const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();

        const users = await listUserReceiverComplimentsService.execute(user_id);

        return response.json(users);
    }
}