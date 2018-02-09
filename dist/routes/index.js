"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
class IndexRoute {
    constructor(router) {
        this.authenticationRoutes = () => {
            this.router.get('/signup', controllers_1.UserController.getNewUser);
        };
        this.router = router;
    }
    static create(router) {
        const apiRoute = new IndexRoute(router);
        apiRoute.authenticationRoutes();
    }
}
exports.IndexRoute = IndexRoute;
