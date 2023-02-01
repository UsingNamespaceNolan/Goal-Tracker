import { GoalsService } from './goals.service';
export declare class GoalsController {
    private goalService;
    constructor(goalService: GoalsService);
    get_goal(): import("./goal").Goal[];
}
