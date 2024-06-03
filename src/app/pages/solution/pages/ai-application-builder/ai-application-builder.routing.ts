import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AIApplicationPlatformComponent} from "./pages/aiapplication-platform/aiapplication-platform.component";
import {EnterpriseAIApplicationsComponent} from "./pages/enterprise-aiapplications/enterprise-aiapplications.component";


const routes: Routes = [
  {
    path: 'ai-application-platform',
    component: AIApplicationPlatformComponent
  },
  {
    path: 'enterprise-ai-applications',
    component: EnterpriseAIApplicationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiApplicationBuilderRouting {
}
