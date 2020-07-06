import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Planet} from '../interfaces/planet';
import {ResponsePlanet} from '../interfaces/response-planet';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {


  // Define API
  apiURL = 'http://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getPlanets(): Observable<ResponsePlanet> {
    return this.http.get<ResponsePlanet>(this.apiURL + 'planets')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
  }
  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
