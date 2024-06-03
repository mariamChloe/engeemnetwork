import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagementAutomationRouting} from "./management-automation.routing";
import {AutomatedProblemDetectionComponent} from "./automated-problem-detection/automated-problem-detection.component";
import {AutonomousProblemAnalysisComponent} from "./autonomous-problem-analysis/autonomous-problem-analysis.component";
import {
  IntentBasedChangeReliabilityComponent
} from "./intent-based-change-reliability/intent-based-change-reliability.component";
import {QoEDrivenOptimizationComponent} from "./qo-e-driven-optimization/qo-e-driven-optimization.component";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    AutomatedProblemDetectionComponent,
    AutonomousProblemAnalysisComponent,
    IntentBasedChangeReliabilityComponent,
    QoEDrivenOptimizationComponent
  ],
  imports: [
    CommonModule,
    ManagementAutomationRouting,
    SharedModule,
    TranslateModule
  ]
})
export class ManagementAutomationModule { }
