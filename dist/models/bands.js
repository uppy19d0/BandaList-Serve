"use strict";
// const {Band} =require('./band');
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bands = void 0;
class Bands {
    constructor() {
        this.bands = [];
    }
    addBand(band = new Band()) {
        this.bands.push(band);
    }
    getBand() {
        return this.bands;
    }
    deleteBand(id) {
        this.bands = this.bands.filter((band) => band.id !== id);
    }
    voteBand(id) {
        this.bands = this.bands.map((band) => {
            if (band.id === id) {
                band.votes++;
                return band;
            }
        });
    }
}
exports.Bands = Bands;
// module.exports = Bands;
//# sourceMappingURL=bands.js.map