import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Goal, GoalDTO } from "./goal";
import { Observable } from "rxjs";
import { catchError, retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GoalsService {
  constructor(private httpClient: HttpClient) {}

  api_url = "http://localhost:3000/goals";

  async getGoals() {
    const allGoals = this.httpClient.get<Goal>(this.api_url);
    allGoals.subscribe();
    return await allGoals;
  }

  async getGoal(id: number) {
    return await this.httpClient.get<Goal>(this.api_url + "/" + id);
  }

  async addGoal(goal: GoalDTO) {
    const newGoal = this.httpClient.post<Goal>(this.api_url + "/create", goal);
    newGoal.subscribe();
    return await newGoal;
  }

  async toggleComplete(id:number, complete:boolean){
    const updateGoal = this.httpClient.post<Goal>(this.api_url + "/toggle-complete/" + id, {complete});
    updateGoal.subscribe()
    return await updateGoal;
  }
}
