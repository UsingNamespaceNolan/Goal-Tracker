export interface Goal {
    id: number;
    name: string;
    description: string;
    complete: boolean;
    completeBy: Date;
}
export interface GoalDTO {
    name: string;
    description: string;
    complete: boolean;
    completeBy: Date;
}