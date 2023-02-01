import { Injectable } from '@nestjs/common';
import { Goal } from './goal';

@Injectable()
export class GoalsService {
    goals:Array<Goal> = [
        {
            name: "Goal 1 Name",
            description: "Goal 1 description"
        },
        {
            name:"Goal 2 Name",
            description: "Goal 2 description"
        }
    ]
    goal: Goal = {
        name: "Goal 1 Name",
            description: "Goal 1 description"
    }
    getGoals(){
        return this.goals;
    }
}
