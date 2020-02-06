import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SurveyResult } from '../model/survey-results.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http: HttpClient) {}

  getSurveyResults(): Observable<SurveyResult> {
    return this.http.get<any>('http://localhost:3001').pipe(
      catchError(err => {
        console.error(err);
        return err;
      }),
    );
  }
}
