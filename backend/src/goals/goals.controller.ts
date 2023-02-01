import { Controller, Get } from '@nestjs/common';
import { GoalsService } from './goals.service';

@Controller('goals')
export class GoalsController {
    constructor(private goalService: GoalsService){

    }

    @Get()
    get_goal(){
        return this.goalService.getGoals()
    }
}
