import { GoalsService } from './goals.service';
export declare class GoalsController {
    private goalService;
    constructor(goalService: GoalsService);
    get_goals(): Promise<import("../entities/mainList.entity").MainGoalTable[]>;
    get_goal(goalId: number): Promise<import("../entities/mainList.entity").MainGoalTable>;
    create_goal(body: any): Promise<{
        name: any;
        description: any;
    } & import("../entities/mainList.entity").MainGoalTable>;
}
