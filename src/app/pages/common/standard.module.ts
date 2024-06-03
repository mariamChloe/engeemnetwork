import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { TechnologyAndExpertiseComponent } from './technology-and-expertise/technology-and-expertise.component';
import { MicroserviceComponent } from './technology-and-expertise/pages/microservice/microservice.component';
import { AutomationComponent } from './technology-and-expertise/pages/automation/automation.component';
import { StreamingComponent } from './technology-and-expertise/pages/streaming/streaming.component';
import { AnalyticsComponent } from './technology-and-expertise/pages/analytics/analytics.component';
import { StackComponent } from './technology-and-expertise/pages/stack/stack.component';
import { NetworkServiceComponent } from './technology-and-expertise/pages/network-service/network-service.component';
import { RouterModule } from '@angular/router';
import { WeAreUniqueComponent } from './we-are-unique/we-are-unique.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    TechnologyAndExpertiseComponent,
    MicroserviceComponent,
    AutomationComponent,
    StreamingComponent,
    AnalyticsComponent,
    StackComponent,
    NetworkServiceComponent,
    WeAreUniqueComponent,
  ],
  imports: [CommonModule, SharedModule, TranslateModule, RouterModule],
})
export class StandardModule {}
