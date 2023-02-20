import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
    constructor(private goalService: GoalsService){

    }

    @Get()
    get_goals(){
        return this.goalService.getGoals()
    }

    @Get(':goalId')
    get_goal(@Param() goalId: number) {
        console.log(goalId)

        return this.goalService.getGoal(goalId)
    }

    @Post('create')
    create_goal(@Body() body: any) {
        console.log(body)

        const goal = this.goalService.create_goal(body)

        return goal
    }
}
