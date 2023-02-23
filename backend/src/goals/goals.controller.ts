import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GoalsService } from "./goals.service";
import { GoalDTO } from "./goal";

@Controller("goals")
export class GoalsController {
  constructor(private goalService: GoalsService) {}

  @Get()
  async get_goals() {
    return await this.goalService.getGoals();
  }

  @Post("create")
  async create_goal(@Body() body: GoalDTO) {
    console.log(body);

    return await this.goalService.createGoal(body);
  }

  @Post("toggle-complete/:id")
  async toggle_complete(
    @Body() body: { complete: boolean },
    @Param() id: number
  ) {
    console.log("toggle", body, " ", id);
    return await this.goalService.toggleComplete(id, body.complete);
  }

  @Get(":goalId")
  async get_goal(@Param() goalId: any) {
    console.log(goalId);
    return await this.goalService.getGoal(goalId.goalId);
  }
}
