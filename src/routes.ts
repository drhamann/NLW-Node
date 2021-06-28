
import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ComplimentController } from "./controllers/ComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureadmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { AuthenticateUserService } from "./services/AuthenticateUserService";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const userAuthenticateController = new AuthenticateUserController();

const complimentController = new ComplimentController();


router.post("/login", userAuthenticateController.handle);
router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, complimentController.handle);


export{router}