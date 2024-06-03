import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataModernizationRouting} from "./data-modernization.routing";
import {FastDataPipelineComponent} from "./pages/fast-data-pipeline/fast-data-pipeline.component";
import {
  ModernDecisionDeliverySystemComponent
} from "./pages/modern-decision-delivery-system/modern-decision-delivery-system.component";
import {RealTimeAnalyticsComponent} from "./pages/real-time-analytics/real-time-analytics.component";
import {UnifiedEnterpriseDataComponent} from "./pages/unified-enterprise-data/unified-enterprise-data.component";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    FastDataPipelineComponent,
    ModernDecisionDeliverySystemComponent,
    RealTimeAnalyticsComponent,
    UnifiedEnterpriseDataComponent
  ],
  imports: [
    CommonModule,
    DataModernizationRouting,
    SharedModule,
    TranslateModule
  ]
})
export class DataModernizationModule { }
