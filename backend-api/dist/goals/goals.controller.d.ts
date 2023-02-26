import { GoalsService } from "./goals.service";
import { Goal, GoalDTO } from "./goal";
export declare class GoalsController {
    private goalService;
    constructor(goalService: GoalsService);
    get_goals(): Promise<import("../entities/mainList.entity").MainGoalTable[]>;
    create_goal(body: GoalDTO): Promise<{
        name: string;
        description: string;
        complete: boolean;
        completeBy: Date;
    } & import("../entities/mainList.entity").MainGoalTable>;
    save_goal(body: Goal): Promise<import("typeorm").UpdateResult>;
    toggle_complete(body: {
        complete: boolean;
    }, id: number): Promise<boolean>;
    get_goal(goalId: any): Promise<import("../entities/mainList.entity").MainGoalTable>;
}
