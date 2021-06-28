import {Request, Response } from "express"
import { ComplimentsService } from "../services/ComplimentService";

export class ComplimentController {
    
    async handle(request: Request, response: Response){
        const { tag_id: tag_id, user_sender,  message} = request.body;
        const complimentService = new ComplimentsService();
        const { user_id } = request;

        const compliment = await complimentService.execute({
            tag_id,
            user_receiver : user_id,
            user_sender,
            message
        });

        return response.json(compliment);
    }
}