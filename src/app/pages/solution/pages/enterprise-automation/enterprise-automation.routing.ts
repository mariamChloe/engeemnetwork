import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HyperDataSeedComponent} from "./pages/hyper-data-seed/hyper-data-seed.component";
import {
  EnterpriseDigitizationAutomationComponent
} from "./pages/enterprise-digitization-automation/enterprise-digitization-automation.component";


const routes: Routes = [
  {
    path: 'hyper-data-seed',
    component: HyperDataSeedComponent
  },
  {
    path: 'enterprise-digitization-and-automation',
    component: EnterpriseDigitizationAutomationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriseAutomationRouting {
}
