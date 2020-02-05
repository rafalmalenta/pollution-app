import { WikipediaServiceService } from '../services/wikipedia-service.service';

export class City {
    name: string;
    describtion = 'no records at wikipedia';
    constructor(name) {
        this.name = name;
        // this.describtion = desc;
    }
    addDesribtion(des) {
      if (des) {
        this.describtion = des;
      }
    }
}
