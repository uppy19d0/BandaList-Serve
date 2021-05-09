"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Band = void 0;
const { v4: uuidV4 } = require('uuid');
class Band {
    constructor(name = 'no-name') {
        this.id = uuidV4();
        this.name = name;
        this.votes = 0;
    }
}
exports.Band = Band;
// module.exports = Band;
//# sourceMappingURL=band.js.map