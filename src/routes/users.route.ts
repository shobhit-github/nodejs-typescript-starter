
/*      Core Dependencies
 ---------------------------------------------*/
import {Router} from 'express';
const UserRouter = Router();



/*  controller && middleware dependencies
..............................................*/
import {UserController as UserControl} from '../controllers/user.controller';


/* instances of all controllers
..............................................*/
const UserController = new UserControl();



/**
 |=====================================================================
 |    Routers for the beacon app...
 |=====================================================================
 */



/* Routes for User Controller Module
 |........................................ */

UserRouter.get('/user', UserController.getUserInfo);







export default UserRouter;