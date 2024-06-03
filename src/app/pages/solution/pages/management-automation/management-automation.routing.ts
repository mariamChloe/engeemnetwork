import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AutomatedProblemDetectionComponent} from "./automated-problem-detection/automated-problem-detection.component";
import {AutonomousProblemAnalysisComponent} from "./autonomous-problem-analysis/autonomous-problem-analysis.component";
import {
  IntentBasedChangeReliabilityComponent
} from "./intent-based-change-reliability/intent-based-change-reliability.component";
import {QoEDrivenOptimizationComponent} from "./qo-e-driven-optimization/qo-e-driven-optimization.component";


const routes: Routes = [
  {
    path:"",
    redirectTo: "automated-problem-detection",
    pathMatch: "full"
  },
  {
    path:"automated-problem-detection",
    component: AutomatedProblemDetectionComponent
  },
  {
    path:"autonomous-problem-analysis",
    component: AutonomousProblemAnalysisComponent
  },
  {
    path:"intent-based-change-reliability",
    component: IntentBasedChangeReliabilityComponent
  },
  {
    path:"qo-e-driven-optimization",
    component: QoEDrivenOptimizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementAutomationRouting {
}
