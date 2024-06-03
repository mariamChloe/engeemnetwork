import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AiApplicationBuilderRouting} from "./ai-application-builder.routing";
import {AIApplicationPlatformComponent} from "./pages/aiapplication-platform/aiapplication-platform.component";
import {EnterpriseAIApplicationsComponent} from "./pages/enterprise-aiapplications/enterprise-aiapplications.component";
import {SharedModule} from "../../../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    AIApplicationPlatformComponent,
    EnterpriseAIApplicationsComponent
  ],
  imports: [
    CommonModule,
    AiApplicationBuilderRouting,
    SharedModule,
    TranslateModule
  ]
})
export class AiApplicationBuilderModule { }
