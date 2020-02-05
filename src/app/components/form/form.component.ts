import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchCitiesService } from '../../services/fetch-cities.service';
import { City} from '../../models/City';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() countryList: Array<City>;
  @Output() pollutedCitiesFetched: EventEmitter<any> = new EventEmitter();
  fetching = false;
  fetched = false;
  hidden = false;
  radiosAreValid = false;
  countryInputValid = false;
  countryValue: string;
  radioValue: string;
  constructor(private fetchCities: FetchCitiesService) { }
  radioChanged(value) {
    this.radioValue = value;
    this.radiosAreValid = true;

  }
  inputValid(value) {
    this.countryInputValid = true;
    this.countryValue = value;
  }

  ngOnInit() {

  }
  formToggleClass() {
    return { hidden: this.hidden };
  }
  toggle() {
    this.hidden = !this.hidden;
  }
  disabled() {
    if (!this.countryInputValid || !this.radiosAreValid) {
      return true;
    } else {
      return false;
    }
  }
  submitHandler(event) {
    event.preventDefault();
    this.fetching = true;
    this.fetched = false;
    console.log(this.countryValue);
    this.fetchCities.getCities(this.countryValue, this.radioValue, 1).subscribe((response) => {
      const arr: Array<any> = [];
      response.results.map(city => {
        let existInArray = false;
        existInArray = arr.some(element => {
          if (element === city.city) {
            return true;
          }
        });
        if (!existInArray && arr.length < 10) {
          arr.push(city.city);
        }
      });
      this.fetching = false;
      if (arr.length === 10) {
        this.fetched = true;
      }
        // console.log(arr)
      this.pollutedCitiesFetched.emit(arr);
    });

  }


}
