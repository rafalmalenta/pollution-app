import { Component, OnInit } from '@angular/core';
import { WikipediaServiceService } from '../../services/wikipedia-service.service';
import { City} from '../../models/City';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {
  inputValue: string;
  pickedCountry: string;
  countriesToDisplay: Array<string> = [];
  cities: City[] = [];
  cityList: Array<City> = [];
  countryList: Array<string> = ['Poland', 'Germany', 'Spain', 'France'];
  constructor(private wikiService: WikipediaServiceService) { }

  ngOnInit() {
  }
  pollutedCitiesFetched(event) {
    this.cityList = event.map((name) => {
      const city = new City(name);
      this.wikiService.getDesribtion(name).subscribe((result) => {
        const x = result.query.pages;
        const ob = Object.keys(x)[0];
        let describtion = x[ob].extract;
        describtion = describtion.substring(0, 2200); //
        city.addDesribtion(describtion);
      });
      return city;
    });
  }
}
