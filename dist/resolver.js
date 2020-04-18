"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        serverTime: (parent, args, context, info) => {
            return new Date();
        }
    }
};
