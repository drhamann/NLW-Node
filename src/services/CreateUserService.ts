import { UsersRepositories } from "../repositories/repositories";
import {getCustomRepository} from "typeorm"

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
}
export class CreateUserService {

    async execute({name, email, admin} : IUserRequest ){
        const usersRepositories = getCustomRepository(UsersRepositories);

        if(!email){
            throw new Error("Email incorrect");            
        }

        const usersAlreadyExists = await usersRepositories.findOne({email});

        if(usersAlreadyExists){
            throw new Error("User already exist");            
        }

        const user = usersRepositories.create({
            name,
            email,
            admin
        });

        await usersRepositories.save(user);

        return user;
    }
}