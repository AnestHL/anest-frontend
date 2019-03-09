import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CourseReady } from 'src/app/model/course-ready.model';

@Injectable({
  providedIn: 'root'
})
export class CourseReadyService {

  private url = 'api/courseready';  // URL to web api
  private localUrl = 'http://localhost:8080/course-ready/all';
  private realUrl = 'https://anest-hl-backend.herokuapp.com/course-ready/all';

  constructor(private _http: HttpClient) { }

  /** GET course ready from the server */
  getCourseReady(): Observable<CourseReady[]> {
    return this._http.get<CourseReady[]>(this.localUrl)
      .pipe(
        tap(_ => console.log('fetched course ready')),
        catchError(this.handleError('getCourseReady', []))
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
