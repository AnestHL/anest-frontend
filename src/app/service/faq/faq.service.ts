import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Faq } from 'src/app/model/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private url = 'api/faq';  // URL to web api
  private realUrl = 'https://anest-hl-backend.herokuapp.com/faq/0';

  constructor(private _http: HttpClient) { }

  /** GET faq from the server */
  getFaq(): Observable<Faq[]> {
    return this._http.get<Faq[]>(this.realUrl)
      .pipe(
        tap(_ => console.log('fetched faq')),
        catchError(this.handleError('getFaq', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
