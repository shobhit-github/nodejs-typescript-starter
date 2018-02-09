"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const errorHandler = require("errorhandler");
const cors = require("cors");
const config_1 = require("./config");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    api() {
        this.app.use('/api', config_1.Configuration.apiRoutes);
    }
    config() {
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'pug');
        this.app.use(logger(() => `development`));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser('SECRET_GOES_HERE'));
        this.app.use((err, req, res, next) => { err.status = 404; next(err); });
        this.app.use(cors());
        this.app.use(errorHandler());
    }
    routes() {
    }
}
exports.Server = Server;
