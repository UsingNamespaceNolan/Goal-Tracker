import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './goal'
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private httpClient: HttpClient) { }

  api_server = "http://localhost:3000/goals";

  getGoals(){
    const allGoals = this.httpClient.get<Goal>(this.api_server);
    allGoals.subscribe()
    return allGoals;
  }
}
