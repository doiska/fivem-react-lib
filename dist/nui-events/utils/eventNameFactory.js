"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventNameFactory = void 0;
var eventNameFactory = function (app, event) {
    return app + ":" + event;
};
exports.eventNameFactory = eventNameFactory;
