import { Goal } from 'src/goals/goal';
export declare class MainGoalTable implements Goal {
    id: number;
    name: string;
    description: string;
    complete: boolean;
    completeBy: Date | null;
}
