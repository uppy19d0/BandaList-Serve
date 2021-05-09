// const {Band} =require('./band');

import { Band } from "./band";

export class Bands {
  bands: Band[];
  constructor() {
    this.bands = [];
  }

  addBand(band = new Band()) {
    this.bands.push(band);
  }
  getBand() {
    return this.bands;
  }
  deleteBand(id: string) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  voteBand(id:string) {
    this.bands = this.bands.map((band) =>{
        // console.log(_band.id);
      if (band.id === id) {
        //   console.log("que paso?!!!");
        band.votes++;
        return band;
      }
      else{
          return band;
      }
    });
  }
}


// module.exports = Bands;