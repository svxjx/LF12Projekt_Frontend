import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question-model';


@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  private URL = "http://localhost:8080"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getQuestion():Observable<Question>{
    return this.http.get<Question>(this.URL + '/api/0/new_question');
  }
}
