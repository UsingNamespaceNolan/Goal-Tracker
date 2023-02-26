import { Component, ViewChild, ElementRef } from '@angular/core';
import { GoalsService } from "../goals/goals.service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Goal, GoalDTO } from '../goals/goal';
import { faCheckCircle, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css']
})
export class GoalEditComponent {
  constructor(private goalsService: GoalsService, private route: ActivatedRoute){}

  goal$: Observable<any> | undefined;
  goalId: any;
  @ViewChild('goalName') goalName!: ElementRef;
  @ViewChild('newDescription') newDescrIn!: ElementRef;
  @ViewChild('newCompleteDate') newDateIn!: ElementRef;
  @ViewChild('complete') complete!: ElementRef;
  faCheckCircle = faCheckCircle;
  faCircleXmark = faCircleXmark;


  saveGoalEdit(){
     const newGoal: Goal = {
        id: this.goalId,
        name: this.goalName.nativeElement.value,
        description: this.newDescrIn.nativeElement.value,
        complete: this.complete.nativeElement.value,
        completeBy: this.newDateIn.nativeElement.value
    } 

    this.goalsService.saveGoalEdit(newGoal);

  }

  async ngOnInit(){
    const snapshot = this.route.snapshot;
    this.goalId = snapshot.params["id"];
    this.goal$ = await this.goalsService.getGoal(this.goalId);
  }
}
