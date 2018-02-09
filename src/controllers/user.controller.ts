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

    /**
     * This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
     * @since 4.16.0
     */
    public index = (req: Request, res: Response) => {

        this.getResponse(req, res);
    };


    public getNewUser = (req: Request, res: Response) => {

        return res.sendStatus(200).json({user_account: 9685745, value: 178});
    };


    private getResponse = (req: Request, res: Response) => res.sendStatus(200).json({firstname: 'Shobhit', lastname: 'Sharma'});

}