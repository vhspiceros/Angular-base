import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CovidStatModel } from '../models/covid-stats.model';

@Injectable({
  providedIn: 'root'
})

export class CovidStatsService {
  private url = 'https://api.covid19api.com/total/dayone/country/chile/status/confirmed';

  constructor(private http: HttpClient) { }

  public GetAll(): Observable<CovidStatModel[]> {
    return this.http.get<CovidStatModel[]>(this.url);
  }
}
