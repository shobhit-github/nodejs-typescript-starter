"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("./base.controller");
class UserController extends base_controller_1.BaseController {
    constructor() {
        super();
        this.index = (req, res) => {
            this.getResponse(req, res);
        };
        this.getNewUser = (req, res) => {
            return res.sendStatus(200).json({ user_account: 9685745, value: 178 });
        };
        this.getResponse = (req, res) => res.sendStatus(200).json({ firstname: 'Shobhit', lastname: 'Sharma' });
    }
}
exports.UserController = UserController;
