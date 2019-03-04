"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
function getUserName(userID) {
    return request_1.default('/users/' + userID).then(function (user) { return user.name; });
}
exports.getUserName = getUserName;
