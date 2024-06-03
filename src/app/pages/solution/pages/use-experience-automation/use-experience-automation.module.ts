import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CognitiveCustomerExperienceComponent} from "./cognitive-customer-experience/cognitive-customer-experience.component";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { UseExperienceAutomationRouting } from './use-experience-automation.routing';
import { UserImpactAnalysisComponent } from './user-impact-analysis/user-impact-analysis.component';
import { QualityOfExperienceComponent } from './quality-of-experience/quality-of-experience.component';








@NgModule({
  declarations: [
    CognitiveCustomerExperienceComponent,
    UserImpactAnalysisComponent,
    QualityOfExperienceComponent


  ],
  imports: [ UseExperienceAutomationRouting,
    SharedModule,
    CommonModule,
  
  ]
})
export class UseExperienceAutomationModule { }
