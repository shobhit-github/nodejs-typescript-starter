import {Request, Response} from "express";
import {BaseController} from "./base.controller";




export class UserController extends BaseController {

    /**
    * In this constructor super uses to inherit the `BaseController`
    * @class UserController
    */
    constructor() {
        //initialize variables
        super();
    }




    public getUserInfo = (req: Request, res: Response) => {

        return res.status(200)
            .json({user_account: 9685745, value: 178});
    };




}
