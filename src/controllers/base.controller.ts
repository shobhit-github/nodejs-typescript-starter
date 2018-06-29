import {Request, Response} from "express";

/**
 * Constructor
 *
 * @class BaseController
 */
export class BaseController {


    constructor() {
        //initialize variables

    }


    public baseDemoFunc = (): void => {
        console.log('base called')
    }

}