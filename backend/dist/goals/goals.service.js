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
exports.GoalsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mainList_entity_1 = require("../entities/mainList.entity");
const typeorm_2 = require("typeorm");
let GoalsService = class GoalsService {
    constructor(connection) {
        this.connection = connection;
    }
    async getGoals() {
        const goals = await this.connection.transaction(async (manager) => {
            const repo = manager.getRepository(mainList_entity_1.MainGoalTable);
            const goals = repo.find();
            return goals;
        });
        return goals;
    }
    async getGoal(goalId) {
        const goal = await this.connection.transaction(async (manager) => {
            const repo = manager.getRepository(mainList_entity_1.MainGoalTable);
            const goal = repo.findOne({ where: { id: 1 } });
            return goal;
        });
        console.log(goal);
        return goal;
    }
    async create_goal(body) {
        const goal = await this.connection.transaction(async (manager) => {
            const repo = manager.getRepository(mainList_entity_1.MainGoalTable);
            const goal = repo.save({
                name: body.name,
                description: body.description
            });
            return goal;
        });
        console.log('Creadted goal:', goal);
        return goal;
    }
};
GoalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], GoalsService);
exports.GoalsService = GoalsService;
//# sourceMappingURL=goals.service.js.map