import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { NetworkDataProcessingComponent } from "./network-data-processing/network-data-processing.component";
import { OperationalTelcoDatalakeComponent } from "./operational-telco-datalake/operational-telco-datalake.component";
import { DigitalProcessAutomationComponent } from "./digital-process-automation/digital-process-automation.component";

const routes: Routes = [
  {
    path:"",
    redirectTo: "network-data-processing",
    pathMatch: "full"
  },
  {
    path:"network-data-processing",
    component: NetworkDataProcessingComponent
  },
  {
    path:"operational-telco-datalake",
    component: OperationalTelcoDatalakeComponent
  },
  {
    path:"digital-process-automation",
    component: DigitalProcessAutomationComponent
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
export class DataProcessingRouting {
}
