import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoalsModule } from './goals/goals.module';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goal/goal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoalEditComponent } from './goal-edit/goal-edit.component';

const routes: Routes = [
  {
    path: 'goals',
    children: [{ path: '', component: GoalsComponent },
      { path: ':id', component: GoalComponent},
      { path: ':id/edit', component: GoalEditComponent},

    ]
  }];

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalEditComponent,
  ],
  imports: [
    GoalsModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
