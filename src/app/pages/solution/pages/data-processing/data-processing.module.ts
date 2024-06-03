import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../../../shared/shared.module";
import { NetworkDataProcessingComponent } from './network-data-processing/network-data-processing.component';
import { OperationalTelcoDatalakeComponent } from './operational-telco-datalake/operational-telco-datalake.component';
import { DigitalProcessAutomationComponent } from './digital-process-automation/digital-process-automation.component';
import { DataProcessingRouting } from './data-processing.routing';






@NgModule({
  declarations: [
     NetworkDataProcessingComponent,
     OperationalTelcoDatalakeComponent,
     DigitalProcessAutomationComponent
  ],
  imports: [ DataProcessingRouting,
    CommonModule,
    SharedModule
  ]
})
export class DataProcessingModule { }
