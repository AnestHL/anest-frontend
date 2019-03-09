import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Course } from 'src/app/model/course.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'api/courses';  // URL to web api
  private localUrl = 'http://localhost:8080/course/all';
  private realUrl = 'https://anest-hl-backend.herokuapp.com/course/all';

  constructor(private _http: HttpClient) { }

  /** GET courses from the server */
  getCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(this.localUrl)
      .pipe(
        tap(_ => console.log('fetched courses')),
        catchError(this.handleError('getCourses', []))
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
