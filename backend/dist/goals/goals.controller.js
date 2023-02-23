"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalsController = void 0;
const common_1 = require("@nestjs/common");
const goals_service_1 = require("./goals.service");
let GoalsController = class GoalsController {
    constructor(goalService) {
        this.goalService = goalService;
    }
    async get_goals() {
        return await this.goalService.getGoals();
    }
    async create_goal(body) {
        console.log(body);
        return await this.goalService.createGoal(body);
    }
    async toggle_complete(body, id) {
        console.log("toggle", body, " ", id);
        return await this.goalService.toggleComplete(id, body.complete);
    }
    async get_goal(goalId) {
        console.log(goalId);
        return await this.goalService.getGoal(goalId.goalId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoalsController.prototype, "get_goals", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoalsController.prototype, "create_goal", null);
__decorate([
    (0, common_1.Post)("toggle-complete/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GoalsController.prototype, "toggle_complete", null);
__decorate([
    (0, common_1.Get)(":goalId"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoalsController.prototype, "get_goal", null);
GoalsController = __decorate([
    (0, common_1.Controller)("goals"),
    __metadata("design:paramtypes", [goals_service_1.GoalsService])
], GoalsController);
exports.GoalsController = GoalsController;
//# sourceMappingURL=goals.controller.js.map