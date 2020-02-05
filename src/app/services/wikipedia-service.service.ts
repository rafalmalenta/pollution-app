import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WikipediaServiceService {
  baseUrl = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&origin=*&titles=Po%C5%82aniec';
  constructor(private http: HttpClient) { }

  getDesribtion(cityName: string): Observable<any> {
    return this.http.get<string>(`${this.baseUrl}&titles=${cityName}`);

  }
}
