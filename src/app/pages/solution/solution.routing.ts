import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SolutionComponent} from "./solution.component";


const routes: Routes = [
  {
    path: '', component: SolutionComponent
  },
  {
    path: 'ai-application-builder',
    loadChildren: () => import('./pages/ai-application-builder/ai-application-builder.module')
      .then(m => m.AiApplicationBuilderModule),
  },
  {
    path: 'data-modernisation',
    loadChildren: () => import('./pages/data-modernization/data-modernization.module')
      .then(m => m.DataModernizationModule),
  },
  {
    path: 'enterprise-data-platform',
    loadChildren: () => import('./pages/data-platform/data-platform.module')
      .then(m => m.DataPlatformModule),
  },
  {
    path: 'enterprise-automation',
    loadChildren: () => import('./pages/enterprise-automation/enterprise-automation.module')
      .then(m => m.EnterpriseAutomationModule),
  },

  {
    path: 'management-automation',
    loadChildren: () => import('./pages/management-automation/management-automation.module')
      .then(m => m.ManagementAutomationModule),
  },
  {
    path: 'service-monitoring',
    loadChildren: () => import('./pages/service-monitoring/service-monitoring.module')
      .then(m => m.ServiceMonitoringModule),
  },
  {
    path: 'use-experience-automation',
    loadChildren: () => import('./pages/use-experience-automation/use-experience-automation.module')
      .then(m => m.UseExperienceAutomationModule),
  },
  {
    path: 'data-processing',
    loadChildren: () => import('./pages/data-processing/data-processing.module')
      .then(m => m.DataProcessingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionRouting {
}
