
import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureadmin";
import { AuthenticateUserService } from "./services/AuthenticateUserService";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const userAuthenticateController = new AuthenticateUserController();

router.post("/login", userAuthenticateController.handle);

router.post("/users", createUserController.handle);

router.post("/tags",ensureAdmin, createTagController.handle);

export{router}