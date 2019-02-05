"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    function Client(name, phone, address, email, id) {
        this.name = '';
        this.address = '';
        this.phone = '';
        this.email = '';
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
        if (id === null || id === undefined) {
            this.id = Math.random();
        }
        else {
            this.id = id;
        }
    }
    Object.defineProperty(Client.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map