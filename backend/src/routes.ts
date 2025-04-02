import { Router } from "express";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { GetUserController } from "./controllers/users/GetUserControler";

const router = Router();

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle)
router.post("/login", new AuthUserController().handle)
router.post("/getinfo", new GetUserController().handle)



export { router }