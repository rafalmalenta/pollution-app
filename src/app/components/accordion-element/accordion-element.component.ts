import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/City';

@Component({
  selector: 'app-accordion-element',
  templateUrl: './accordion-element.component.html',
  styleUrls: ['./accordion-element.component.sass']
})
export class AccordionElementComponent implements OnInit {
  @Input() city: City;
  hidden = true;
  constructor() { }

  ngOnInit() {
  }

  class() {
    return{
      hidden: this.hidden
    };
  }
  toggle() {
    this.hidden = !this.hidden;
  }
}
