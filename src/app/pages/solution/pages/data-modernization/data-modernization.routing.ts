import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FastDataPipelineComponent} from "./pages/fast-data-pipeline/fast-data-pipeline.component";
import {
  ModernDecisionDeliverySystemComponent
} from "./pages/modern-decision-delivery-system/modern-decision-delivery-system.component";
import {RealTimeAnalyticsComponent} from "./pages/real-time-analytics/real-time-analytics.component";
import {UnifiedEnterpriseDataComponent} from "./pages/unified-enterprise-data/unified-enterprise-data.component";


const routes: Routes = [
  {
    path: 'fast-data-pipeline',
    component: FastDataPipelineComponent
  },
  {
    path: 'modern-decision-delivery-system',
    component: ModernDecisionDeliverySystemComponent
  },
  {
    path: 'real-time-analytics',
    component: RealTimeAnalyticsComponent
  },
  {
    path: 'unified-enterprise-data',
    component: UnifiedEnterpriseDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataModernizationRouting {
}
