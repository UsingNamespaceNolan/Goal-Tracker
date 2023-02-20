import { Input, Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { GoalsService } from './goals.service';
import { Goal } from './goal';

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

  addGoal(){
    const newGoal: Goal = {
      name: this.nameIn.nativeElement.value,
      description: this.descrIn.nativeElement.value
    } 

    this.goalsService.addGoal(newGoal);

    this.refreshGoals()

  }

  async refreshGoals() {
    this.goals$ = await this.goalsService.getGoals();
  }

  goals$: Observable<any> | undefined;
  async ngOnInit() {
    this.refreshGoals()
  }
}