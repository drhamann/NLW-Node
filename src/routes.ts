import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ComplimentController } from "./controllers/ComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ensureAdmin } from "./middlewares/ensureadmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

const createTagController = new CreateTagController();
const listTagController = new ListTagController();

const userAuthenticateController = new AuthenticateUserController();
const complimentController = new ComplimentController();

const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();



router.post("/login", userAuthenticateController.handle);

router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle);

router.post("/compliments", ensureAuthenticated, complimentController.handle);
router.get("/compliments/receiver", ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get("/compliments/sender", ensureAuthenticated, listUserSenderComplimentsController.handle);


export { router }