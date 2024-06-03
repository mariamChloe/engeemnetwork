import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataPlatformRouting} from "./data-platform.routing";
import {
  AutomatedOperationalAnalyticsComponent
} from "./pages/automated-operational-analytics/automated-operational-analytics.component";
import {DataManagementSecurityComponent} from "./pages/data-management-security/data-management-security.component";
import {DataStreamingServiceComponent} from "./pages/data-streaming-service/data-streaming-service.component";
import {
  HighPerformanceDataLakesComponent
} from "./pages/high-performance-data-lakes/high-performance-data-lakes.component";
import {ScalableDataLakehouseComponent} from "./pages/scalable-data-lakehouse/scalable-data-lakehouse.component";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    AutomatedOperationalAnalyticsComponent,
    DataManagementSecurityComponent,
    DataStreamingServiceComponent,
    HighPerformanceDataLakesComponent,
    ScalableDataLakehouseComponent
  ],
  imports: [
    CommonModule,
    DataPlatformRouting,
    SharedModule,
    TranslateModule
  ]
})
export class DataPlatformModule { }
