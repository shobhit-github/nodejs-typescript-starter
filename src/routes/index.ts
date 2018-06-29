import {Router} from "express";
const AppRouter = Router();

// all routing dependencies
import AuthRouter from "./auth.route";
import UserRouter from "./users.route";


// routing for authentication
AppRouter.use('/auth', AuthRouter);

// routing for user functionality
AppRouter.use('/user', UserRouter);



export default AppRouter;