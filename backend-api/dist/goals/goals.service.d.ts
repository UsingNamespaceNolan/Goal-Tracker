import { MainGoalTable } from "src/entities/mainList.entity";
import { Connection } from "typeorm";
import { Goal, GoalDTO } from "./goal";
export declare class GoalsService {
    private connection;
    constructor(connection: Connection);
    getGoals(): Promise<MainGoalTable[]>;
    getGoal(goalId: number): Promise<MainGoalTable>;
    toggleComplete(id: number, completed: boolean): Promise<boolean>;
    createGoal(body: GoalDTO): Promise<{
        name: string;
        description: string;
        complete: boolean;
        completeBy: Date;
    } & MainGoalTable>;
    saveGoalEdit(body: Goal): Promise<import("typeorm").UpdateResult>;
    completeGoal(): Promise<MainGoalTable[]>;
}
