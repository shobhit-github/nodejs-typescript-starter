import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import * as errorHandler from 'errorhandler';
import * as cors from 'cors';


/*  App dependencies
-----------------------*/
import {Configuration} from "./config";


/**
 * @class Server
 */
export class Server {


    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {'ng.auto.IInjectorService'} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {

        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {

        // create express.js application
        this.app = express();

        // configure application
        this.config();

        // add routes
        this.routes();

        // add api
        this.api();
    }

    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    public api() {

        this.app.use('/api', Configuration.apiRoutes )
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {

        // add static paths
        this.app.use(express.static(path.join(__dirname, 'public')));

        // configure pug
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'pug');

        // mount logger
        this.app.use(logger(() => `development` ));

        // mount json form parser
        this.app.use(bodyParser.json());

        // mount query string parser
        this.app.use(bodyParser.urlencoded({ extended: true }));

        // mount cookie parser middleware
        this.app.use(cookieParser('SECRET_GOES_HERE'));

        // catch 404 and forward to error handler
        this.app.use( (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => { err.status = 404; next(err); });

        // Cross-Origin-Resource-Sharing headers configurations and api-routes
        this.app.use( cors() );

        // error handling
        this.app.use(errorHandler());
    }

    /**
     * Create and return Router.
     *
     * @class Server
     * @method config
     * @return void
     */
    private routes() {

        // use router middleware
    }

}
