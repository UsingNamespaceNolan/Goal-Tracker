import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { GoalsService } from '../goals/goals.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  constructor (private service: GoalsService, private route: ActivatedRoute){}
  goal: any | null = null;

  async refreshGoal() {
    const snapshot = this.route.snapshot;
    const goalId = snapshot.params['id'];
    this.goal$ = await this.service.getGoal(goalId);
  }

  goal$: Observable<any> | undefined;

  ngOnInit(){
    this.refreshGoal()
  }
}
