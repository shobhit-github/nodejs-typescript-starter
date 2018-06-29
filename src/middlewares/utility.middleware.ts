import {NextFunction, Request, Response} from "express";


// other dependencies
import {en, fr} from "../lang";


/**
 * Constructor
 *
 * @class UtilityMiddleware
 */
export class UtilityMiddleware {


    constructor() {
        //initialize variables

    }


    public languageSetter = (req: Request, res: Response, next: NextFunction): void => {

        const langRequest = req.header('Language') || 'en';

        switch ( langRequest ) {
            case 'en': global['txt'] = en; break;

            default:
                console.error("INVALID LANGUAGE"); break;
        }
        next();
    }

}