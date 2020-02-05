import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.sass']
})
export class AutocompleteInputComponent implements OnInit {
  @Input() countryList: Array<any>;
  @Output() inputValid: EventEmitter<any> = new EventEmitter();
  inputIsValid = true;
  inputValue: string;
  countriesToDisplay: Array<string>;
  constructor() { }
  ngOnInit() {
    this.inputValue = localStorage.getItem('inputValue') || '';
    if (this.validate()) { this.inputValid.emit(this.inputValue); }
  }
  filterCountries(event: Event) {
    this.countriesToDisplay = this.countryList.filter((country) => {
      if (country.toLowerCase().includes(this.inputValue.toLowerCase())) {
        return country;
      }
    });
  }
  validate() {
    let x = false;
    x = this.countryList.some(element => {
      if (element.toLowerCase() === this.inputValue.toLowerCase()) {
        return true;
      }
    });
    return x;
  }
  inputClass() {
    return{
      invalid: !this.inputIsValid,
    };
  }
  clear() {
    setTimeout(() => {
      this.countriesToDisplay = [];
      this.inputIsValid = this.validate();
      if (this.validate()) {
        localStorage.setItem('inputValue', this.inputValue);
      }
      this.inputValid.emit(this.inputValue);

    }, 150);
  }
  pickCountry(event) {
    this.inputValue = event.target.innerText;

  }
}

