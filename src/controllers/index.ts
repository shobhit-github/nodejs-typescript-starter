import {UserController as UserCtrl} from './user.controller';
import {AuthController as AuthCtrl} from "./auth.controller";


// exporting the controller instances
export const UserController = new UserCtrl();
export const AuthController = new AuthCtrl();