import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parameter-radios',
  templateUrl: './parameter-radios.component.html',
  styleUrls: ['./parameter-radios.component.sass']
})
export class ParameterRadiosComponent implements OnInit, OnDestroy {
  @Output() radioChanged: EventEmitter<any> = new EventEmitter();
  constructor() { }
  changeHandler(event) {
    this.radioChanged.emit(event.target.value);
  }
  ngOnInit() {
    const radios = document.querySelectorAll('input[name=pollution]');
    radios.forEach((radio) => {
            radio.addEventListener('change', this.changeHandler.bind(this));
        });
  }
  ngOnDestroy() {
    const radios = document.querySelectorAll('input[name=pollution]');
    radios.forEach((radio) => {
            radio.removeEventListener('change', this.changeHandler);
        });
  }

}
