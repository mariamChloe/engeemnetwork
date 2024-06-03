import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceMonitoringRouting} from "./service-monitoring.routing";
import {AggregatedQoSKPIsComponent} from "./aggregated-qo-s-kpis/aggregated-qo-s-kpis.component";
import {ModernNetworkPerformanceComponent} from "./modern-network-performance/modern-network-performance.component";
import {NOCAlarmAggregationComponent} from "./noc-alarm-aggregation/noc-alarm-aggregation.component";
import {QualitySLSSLADesignComponent} from "./quality-sls-sla-design/quality-sls-sla-design.component";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";




@NgModule({
  declarations: [
    AggregatedQoSKPIsComponent,
    ModernNetworkPerformanceComponent,
    NOCAlarmAggregationComponent,
    QualitySLSSLADesignComponent,
    
  ],
  imports: [
    CommonModule,
    ServiceMonitoringRouting,
    SharedModule,
    TranslateModule
  ]
})
export class ServiceMonitoringModule { }
