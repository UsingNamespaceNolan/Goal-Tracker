import { Injectable } from "@nestjs/common";
import { InjectConnection } from "@nestjs/typeorm";
import { MainGoalTable } from "src/entities/mainList.entity";
import { arrayBuffer } from "stream/consumers";
import { Connection } from "typeorm";
import { Goal, GoalDTO } from "./goal";

@Injectable()
export class GoalsService {
  constructor(@InjectConnection() private connection: Connection) {}

  async getGoals() {
    const goals = await this.connection.transaction(async (manager) => {
      const repo = manager.getRepository(MainGoalTable);

      const goals = repo.find();

      return goals;
    });

    return goals;
  }

  async getGoal(goalId: number) {
    const goal = await this.connection.transaction(async (manager) => {
      const repo = manager.getRepository(MainGoalTable);

      const goal = repo.findOne({ where: { id: goalId } });

      return goal;
    });
    console.log("here", goal);

    return goal;
  }

  async toggleComplete(id: number, completed: boolean) {
    return await this.connection.transaction(async (manager) => {
      const repo = manager.getRepository(MainGoalTable);

      await repo.update(id, {complete:completed});
      return completed;
    });
  }

  async createGoal(body: GoalDTO) {
    const goal = await this.connection.transaction(async (manager) => {
      const repo = manager.getRepository(MainGoalTable);

      const goal = repo.save({
        name: body.name,
        description: body.description,
        complete: body.complete,
        completeBy: body.completeBy,
      });

      return goal;
    });

    console.log("Creadted goal:", goal);
    return goal;
  }

  async completeGoal() {
    const goals = await this.connection.transaction(async (manager) => {
      const repo = manager.getRepository(MainGoalTable);

      const goals = repo.find();

      return goals;
    });

    return goals;
  }
}
