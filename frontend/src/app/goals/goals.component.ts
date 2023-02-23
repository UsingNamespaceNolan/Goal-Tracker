import { Input, Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { GoalsService } from './goals.service';
import { Goal, GoalDTO } from './goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {
  constructor(private goalsService: GoalsService){

  }

  @ViewChild('name') nameIn!: ElementRef;
  @ViewChild('description') descrIn!: ElementRef;
  @ViewChild('completeByDate') completeDateIn!: ElementRef;

  selectedGoal: string|null = null;

  toggleComplete(goal: Goal){
    this.goalsService.toggleComplete(goal.id, !goal.complete)

  }

  addGoal(){
    const newGoal: GoalDTO = {
      name: this.nameIn.nativeElement.value,
      description: this.descrIn.nativeElement.value,
      complete: false,
      completeBy: this.completeDateIn.nativeElement.value
    } 

    this.goalsService.addGoal(newGoal);

    setTimeout(()=>this.refreshGoals(), 500)

  }

  async refreshGoals() {
    this.goals$ = await this.goalsService.getGoals();
  }

  goals$: Observable<any> | undefined;
  async ngOnInit() {
    this.refreshGoals()
  }
}
