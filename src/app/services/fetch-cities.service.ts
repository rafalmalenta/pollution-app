import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchCitiesService {
  baseUrl = 'https://api.openaq.org/v1/measurements?limit=610&order_by=value&sort=desc&page=1';
  constructor(private http: HttpClient) { }
  getShortName(country) {
    switch (country.toLowerCase()) {
      case 'poland':
        return 'PL';
      case 'germany':
        return 'DE';
      case 'spain':
        return 'ES';
      case 'france':
        return 'FR';

    }
  }
  getCities(country: string, pollution: string, pageNumber: number): Observable<any> {
    console.log(`${this.baseUrl}&country=${this.getShortName(country)}&parameter=${pollution}`);
    return this.http.get<string>(`${this.baseUrl}&country=${this.getShortName(country)}&parameter=${pollution}`);

  }
}
