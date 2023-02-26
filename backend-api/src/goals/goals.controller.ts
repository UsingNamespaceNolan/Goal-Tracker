import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GoalsService } from "./goals.service";
import { Goal, GoalDTO } from "./goal";

@Controller("goals")
export class GoalsController {
  constructor(private goalService: GoalsService) {}

  @Get()
  async get_goals() {
    return await this.goalService.getGoals();
  }

  @Post("create")
  async create_goal(@Body() body: GoalDTO) {

    return await this.goalService.createGoal(body);
  }

  @Post("save")
  async save_goal(@Body() body: Goal) {
    return await this.goalService.saveGoalEdit(body);
  }

  @Post("toggle-complete/:id")
  async toggle_complete(
    @Body() body: { complete: boolean },
    @Param() id: number
  ) {
    return await this.goalService.toggleComplete(id, body.complete);
  }

  @Get(":goalId")
  async get_goal(@Param() goalId: any) {
    return await this.goalService.getGoal(goalId.goalId);
  }
}
