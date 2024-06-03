import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnterpriseAutomationRouting} from "./enterprise-automation.routing";
import {HyperDataSeedComponent} from "./pages/hyper-data-seed/hyper-data-seed.component";
import {
  EnterpriseDigitizationAutomationComponent
} from "./pages/enterprise-digitization-automation/enterprise-digitization-automation.component";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HyperDataSeedComponent,
    EnterpriseDigitizationAutomationComponent
  ],
  imports: [
    CommonModule,
    EnterpriseAutomationRouting,
    SharedModule,
    TranslateModule
  ]
})
export class EnterpriseAutomationModule { }
