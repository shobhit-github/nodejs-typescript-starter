import {Request, Response} from "express";
import {BaseController} from "./base.controller";


/**
 * Authentication
 *
 * @class AuthController
 * @author shobhit sharma
 */
export class AuthController extends BaseController {


    constructor() {
        //initialize variables
        super();
    }


    /* Registering user data
    |----------------------------------------------------------------
    */
    public register = (req: Request, res: Response): any => {

        return res.status(200)
            .json({success: false, message: "Register value"})
    };


    /* Authenticating user info by username and password
    |----------------------------------------------------------------
    */
    public login = (req: Request, res: Response) => {

        return res.status(200)
            .json({success: false, message: "Login Value"})
    }

}


