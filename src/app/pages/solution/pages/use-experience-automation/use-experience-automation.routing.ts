import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";

import {CognitiveCustomerExperienceComponent} from "./cognitive-customer-experience/cognitive-customer-experience.component";
import { UserImpactAnalysisComponent } from "./user-impact-analysis/user-impact-analysis.component";
import { QualityOfExperienceComponent } from "./quality-of-experience/quality-of-experience.component";
const routes: Routes = [
  {
    path:"",
    redirectTo: "cognitive-customer-experience",
    pathMatch: "full"
  },
  {
    path:"cognitive-customer-experience",
    component: CognitiveCustomerExperienceComponent
  },
  {
    path:"user-impact-analysis",
    component: UserImpactAnalysisComponent
  },
  {
    path:"quality-of-experience",
    component: QualityOfExperienceComponent
  },
  /*{
   // path:"quality-sls-sla-design",
    //component: QualitySLSSLADesignComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseExperienceAutomationRouting {
}
