import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {
  AutomatedOperationalAnalyticsComponent
} from "./pages/automated-operational-analytics/automated-operational-analytics.component";
import {DataManagementSecurityComponent} from "./pages/data-management-security/data-management-security.component";
import {DataStreamingServiceComponent} from "./pages/data-streaming-service/data-streaming-service.component";
import {
  HighPerformanceDataLakesComponent
} from "./pages/high-performance-data-lakes/high-performance-data-lakes.component";
import {ScalableDataLakehouseComponent} from "./pages/scalable-data-lakehouse/scalable-data-lakehouse.component";


const routes: Routes = [
  {
    path: 'automated-operational-analytics',
    component: AutomatedOperationalAnalyticsComponent
  },
  {
    path: 'data-management-and-security',
    component: DataManagementSecurityComponent
  },
  {
    path: 'data-streaming-service',
    component: DataStreamingServiceComponent
  },
  {
    path: 'high-performance-data-lakes',
    component: HighPerformanceDataLakesComponent
  },
  {
    path: 'scalable-data-lakehouse',
    component: ScalableDataLakehouseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPlatformRouting {
}
