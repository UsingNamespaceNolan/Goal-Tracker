import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GoalsModule } from './goals/goals.module';
import { LoggingComponent } from './logging/logging.component';
import { RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  {
    path: 'goals',
    children: [{ path: '', component: GoalsComponent },
      { path: ':id', component: GoalComponent}
    ]
  }];

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    GoalComponent,
  ],
  imports: [
    GoalsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
