import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-consent-box',
  templateUrl: './consent-box.component.html',
  styleUrls: ['./consent-box.component.sass']
})
export class ConsentBoxComponent implements OnInit {
  @Output() acceptConsent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  accept() {
      this.acceptConsent.emit();
  }
}
