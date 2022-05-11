import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getQuery(url: string): Observable<object> {
    return this.http.get(url, { headers: this.headers });
  }

  getQueryWithParams(url: string, params: HttpParams) {
    return this.http.get(url, { headers: this.headers, params: params });
  }
}
