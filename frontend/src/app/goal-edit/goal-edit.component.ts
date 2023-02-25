import { Component } from '@angular/core';
import { GoalsService } from "../goals/goals.service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css']
})
export class GoalEditComponent {
  constructor(private service: GoalsService, private route: ActivatedRoute){}
  goal$: Observable<any> | undefined;
  async ngOnInit(){
    const snapshot = this.route.snapshot;
    const goalId = snapshot.params["id"];
    this.goal$ = await this.service.getGoal(goalId);
  }
}
