import { MainGoalTable } from 'src/entities/mainList.entity';
import { Connection } from 'typeorm';
export declare class GoalsService {
    private connection;
    constructor(connection: Connection);
    getGoals(): Promise<MainGoalTable[]>;
    getGoal(goalId: number): Promise<MainGoalTable>;
    create_goal(body: any): Promise<{
        name: any;
        description: any;
    } & MainGoalTable>;
}
