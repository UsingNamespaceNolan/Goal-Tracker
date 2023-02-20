import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { MainGoalTable } from 'src/entities/mainList.entity';
import { arrayBuffer } from 'stream/consumers';
import { Connection } from 'typeorm';
import { Goal } from './goal';

@Injectable()
export class GoalsService {
    constructor(@InjectConnection() private connection: Connection){}

    async getGoals(){

        const goals = await this.connection.transaction(async manager => {
            const repo = manager.getRepository(MainGoalTable);

            const goals = repo.find()

            return goals
        })

        return goals
    }

    async getGoal(goalId: number){
        const goal = await this.connection.transaction(async manager => {
            const repo = manager.getRepository(MainGoalTable);

            const goal = repo.findOne({ where: { id: 1 }})
            
            return goal
        })
        console.log(goal)

        return goal
    }

    async create_goal(body:any) {
        const goal = await this.connection.transaction(async manager => {
            const repo = manager.getRepository(MainGoalTable);

            const goal = repo.save({
                name: body.name,
                description: body.description
            })

            return goal;
        })

        console.log('Creadted goal:', goal)
        return goal;
    }
}
