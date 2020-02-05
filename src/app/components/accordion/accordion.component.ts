import { Component, OnInit, Input } from '@angular/core';
import { WikipediaServiceService } from '../../services/wikipedia-service.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.sass']
})
export class AccordionComponent implements OnInit {
  @Input() cityList: Array<any>;
  constructor(private wikipedia: WikipediaServiceService) { }
  hidden = true;
  ngOnInit() {
  }


}
