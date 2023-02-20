import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './goal'
import { Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private httpClient: HttpClient) { }

  api_url = "http://localhost:3000/goals";

  async getGoals(){
    const allGoals = this.httpClient.get<Goal>(this.api_url);
    allGoals.subscribe()
    return allGoals;
  }
  
  addGoal(goal: Goal): Observable<any>{
    const newGoal = this.httpClient.post<Goal>(this.api_url + '/create', goal);
    console.log(goal)
    newGoal.subscribe()
    return newGoal;
  }
}
