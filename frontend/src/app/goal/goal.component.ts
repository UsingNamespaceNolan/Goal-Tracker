import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GoalsService } from "../goals/goals.service";
import { Observable } from "rxjs";
import { faCheckCircle, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"],
})
export class GoalComponent {
  constructor(private service: GoalsService, private route: ActivatedRoute) {}

  goal: any | null = null;
  goal$: Observable<any> | undefined;
  faCheckCircle = faCheckCircle;
  faCircleXmark = faCircleXmark;

  async refreshGoal() {
    const snapshot = this.route.snapshot;
    const goalId = snapshot.params["id"];
    console.log("id", goalId);
    this.goal$ = await this.service.getGoal(goalId);
    console.log("refresh", this.goal$);
  }

  ngOnInit() {
    this.refreshGoal();
  }
}
