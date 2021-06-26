import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository } from "typeorm"

interface ITagRequest {
    name: string;
}
export class CreateTagService {

    async execute({ name }: ITagRequest) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Incorrect name! Please input a tag name.");
        }

        const tagsAlreadyExists = await tagsRepositories.findOne({ name });

        if (tagsAlreadyExists) {
            throw new Error("Tag already exists!");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
    }
}