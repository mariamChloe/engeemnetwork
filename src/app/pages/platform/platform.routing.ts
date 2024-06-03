import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {
  AutonomousNetworkServicesComponent
} from "./pages/autonomous-network-services/autonomous-network-services.component";
import {ClosedloopAutomationComponent} from "./pages/closedloop-automation/closedloop-automation.component";
import {
  NetworkManagementFunctionsComponent
} from "./pages/network-management-functions/network-management-functions.component";
import {OpenDataPlatformComponent} from "./pages/open-data-platform/open-data-platform.component";
import {
  ProgrammableAppWorkflowsComponent
} from "./pages/programmable-app-workflows/programmable-app-workflows.component";


const routes: Routes = [
  {path: '', component: AutonomousNetworkServicesComponent},
  {
    path: 'autonomous-network-services',
    component: AutonomousNetworkServicesComponent,
  },
  {
    path: 'closed-loop-automation',
    component: ClosedloopAutomationComponent,
  },
  {
    path: 'network-management-functions',
    component: NetworkManagementFunctionsComponent,
  },
  {
    path: 'open-data-platform',
    component: OpenDataPlatformComponent,
  },
  {
    path: 'programmable-app-workflows',
    component: ProgrammableAppWorkflowsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRouting {
}
