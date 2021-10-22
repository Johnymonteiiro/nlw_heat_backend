import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import {CreateMessageControler} from "./controllers/CreateMessageControlers"
import { Get3LastMessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages",ensureAuthenticated, new CreateMessageControler().handle)

router.get("/messages/last3", new Get3LastMessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);


export {router};