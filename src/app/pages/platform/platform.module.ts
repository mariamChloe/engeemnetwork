import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlatformComponent} from './platform.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {TranslateModule} from "@ngx-translate/core";
import {PlatformRouting} from "./platform.routing";
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


@NgModule({
  declarations: [
    PlatformComponent,
    AutonomousNetworkServicesComponent,
    ClosedloopAutomationComponent,
    NetworkManagementFunctionsComponent,
    OpenDataPlatformComponent,
    ProgrammableAppWorkflowsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    PlatformRouting
  ]
})
export class PlatformModule {
}
