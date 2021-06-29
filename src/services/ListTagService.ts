import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer";

export class ListTagService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tags = tagsRepositories.find();

        return classToPlain(tags);
    }
}