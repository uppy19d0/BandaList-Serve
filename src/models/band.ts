const {v4:uuidV4} = require('uuid');
export class Band {
    id:any;
    name:string;
    votes:number;

    constructor(name:string='no-name') {
        this.id =uuidV4();
        this.name = name;
        this.votes = 0;
    }
}

// module.exports = Band;