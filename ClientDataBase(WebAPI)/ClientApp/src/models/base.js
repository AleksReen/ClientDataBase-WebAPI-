"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./client");
var Base = /** @class */ (function () {
    function Base() {
        this._clientBase = [
            // only for TEST
            new client_1.Client('ЗАО "Полимир"', '78-58-98, +375(44)705-45-01', 'Могилёв, пр-кт Димитрова 78, рампа №3', 'polymir@tut.by', 1),
            new client_1.Client('ИП Алекперов К.А', '+375(29)331-85-74', 'Могилёв, пр-кт Мира 37, оф.12', 'player191@rambler.ru', 2),
            new client_1.Client('ИП Коршуков В.А.', '+375(44)779-68-51', 'Могилёв, Первомайска 191', 'mag.Stroy@yandex.ru', 3),
            new client_1.Client('ОДО "Восток-М"', '25-78-96, +375(29)778-98-52', 'Могилёв, ул.Профсоюзная, оф. 214', 'vostok-m@yandex.by', 4),
            new client_1.Client('ЧУП "Иоанн-Купец"', '+375(29)331-26-46', 'Горки, Комсомольская 81, м-н "Зотчий"', 'vitaliy-kypec@tut.by', 5)
        ];
    }
    Object.defineProperty(Base.prototype, "setClientBase", {
        set: function (v) {
            this._clientBase = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "getClientBase", {
        get: function () {
            return this._clientBase;
        },
        enumerable: true,
        configurable: true
    });
    Base.prototype.addClient = function (newClient) {
        this._clientBase.push(newClient);
        return this._clientBase;
    };
    Base.prototype.deleteClient = function (id) {
        this._clientBase = this._clientBase.filter(function (client) { return client.getId != id; });
        return this._clientBase;
    };
    Base.prototype.findClient = function (id) {
        var findClient;
        for (var i = 0; i < this._clientBase.length; i++) {
            if (this._clientBase[i].getId === id) {
                findClient = this._clientBase[i];
            }
        }
        return findClient;
    };
    Base.prototype.sortClientBase = function () {
        this._clientBase.sort(function (clientA, clientB) {
            if (clientA.name > clientB.name) {
                return 1;
            }
            if (clientA.name < clientB.name) {
                return -1;
            }
            return 0;
        });
        return this._clientBase;
    };
    return Base;
}());
exports.Base = Base;
//# sourceMappingURL=base.js.map