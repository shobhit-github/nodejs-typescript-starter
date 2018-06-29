
/*     Core Dependencies
 ---------------------------------------------*/
import * as express from 'express';
const AuthRouter = express.Router();


/*  controller && middleware dependencies
..............................................*/
import {AuthController as AuthControl} from '../controllers/auth.controller';



/* instances of all controllers
..............................................*/
const AuthController = new AuthControl();




/* Routes for Authentication Module
 |........................................ */

AuthRouter.post('/register', AuthController.register);

AuthRouter.get('/login', AuthController.login);





export default AuthRouter;