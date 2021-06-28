import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}
export class ComplimentsService {

    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);


        if(user_receiver === user_sender){
            throw new Error("Incorrect user receiver!");            
        }

        const userReceivedExist = usersRepositories.findOne(user_receiver);

        if(!userReceivedExist){
            throw new Error(" User Receiver does not exists!");            
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });


        await complimentsRepositories.save(compliment);

        return compliment;
    }
}