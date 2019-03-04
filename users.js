"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Users = /** @class */ (function () {
    function Users() {
    }
    Users.all = function () {
        return axios_1.default.get('/users.json').then(function (resp) { return resp.data; });
    };
    return Users;
}());
exports.default = Users;
