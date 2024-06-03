import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggregatedQoSKPIsComponent } from './aggregated-qo-s-kpis/aggregated-qo-s-kpis.component';
import { ModernNetworkPerformanceComponent } from './modern-network-performance/modern-network-performance.component';
import { NOCAlarmAggregationComponent } from './noc-alarm-aggregation/noc-alarm-aggregation.component';
import { QualitySLSSLADesignComponent } from './quality-sls-sla-design/quality-sls-sla-design.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'aggregated-qo-s-kpis',
    pathMatch: 'full',
  },
  {
    path: 'aggregated-qo-s-kpis',
    component: AggregatedQoSKPIsComponent,
  },
  {
    path: 'modern-network-performance',
    component: ModernNetworkPerformanceComponent,
  },
  {
    path: 'noc-alarm-aggregation',
    component: NOCAlarmAggregationComponent,
  },
  {
    path: 'quality-sls-sla-design',
    component: QualitySLSSLADesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceMonitoringRouting {}
