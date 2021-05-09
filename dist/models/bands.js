"use strict";
// const {Band} =require('./band');
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bands = void 0;
const band_1 = require("./band");
class Bands {
    constructor() {
        this.bands = [];
    }
    addBand(band = new band_1.Band()) {
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
            // console.log(_band.id);
            if (band.id === id) {
                //   console.log("que paso?!!!");
                band.votes++;
                return band;
            }
            else {
                return band;
            }
        });
    }
}
exports.Bands = Bands;
// module.exports = Bands;
//# sourceMappingURL=bands.js.map