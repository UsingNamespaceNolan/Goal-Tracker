import { Input, Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
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
  goals$: Observable<any> | undefined;

  ngOnInit(): void{
    this.goals$ = this.goalsService.getGoals();
  }
}
