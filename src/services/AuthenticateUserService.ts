import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}
export class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        const errorMessage = "Email/Password incorrect";
        if (!user) {
            throw new Error(errorMessage);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error(errorMessage);
        }

        const token = sign({
            email: user.email
        }, "7a279e6d5802d03fe81dfbfa49091ef6", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}