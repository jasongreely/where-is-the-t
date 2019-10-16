import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint;
  httpOptions;
  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:4567';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  public getLines(): Observable<any> {
    return this.http.get(this.endpoint + '/').pipe(
      map(this.extractData));
  }
}
