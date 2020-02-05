import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollution-app',
  templateUrl: './pollution-app.component.html',
  styleUrls: ['./pollution-app.component.sass']
})
export class PollutionAppComponent implements OnInit {
  loading = true;
  consent = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  setConsent() {
    this.consent = true;
  }
}
