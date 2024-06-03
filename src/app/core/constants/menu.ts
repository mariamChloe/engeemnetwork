import { Routes } from './routes';

export const Menu = [
  // {
  //   isUrl: true,
  //   url: Routes.Article.route,
  //   //url: "https://www.engeem.com/resources-master",
  //   name: 'Menu.WhyENGEEM',
  // },
  {
    url: Routes.Platform.route,
    name: 'Menu.Platform',
    children: [
      {
        name: 'Menu.categories.category5',
        children: [
          {
            name: 'Menu.Platforms.autonomous-network-services',
            url: Routes.Platform.AutonomousNetworkServices.route,
          },
          {
            name: 'Menu.Platforms.closed-loop-automation',
            url: Routes.Platform.ClosedLoopAutomation.route,
          },
          {
            name: 'Menu.Platforms.network-management-functions',
            url: Routes.Platform.NetworkManagementFunctions.route,
          },
          {
            name: 'Menu.Platforms.open-data-platform',
            url: Routes.Platform.OpenDataPlatform.route,
          },
          {
            name: 'Menu.Platforms.programmable-app-workflows',
            url: Routes.Platform.ProgrammableAppWorkflows.route,
          },
        ],
      },
    ],
  },
  {
    url: Routes.Solution.route,
    name: 'Menu.solution',
    children: [
      {
        name: 'Menu.management-automation',
        children: [
          {
            name: 'Menu.solutions.management-automation.automated-problem-detection',
            url: Routes.Solution.ManagementAutomation.AutomatedProblemDetection
              .route,
          },
          {
            name: 'Menu.solutions.management-automation.autonomous-problem-analysis',
            url: Routes.Solution.ManagementAutomation.AutonomousProblemAnalysis
              .route,
          },
          {
            name: 'Menu.solutions.management-automation.intent-based-change-reliability',
            url: Routes.Solution.ManagementAutomation
              .IntentBasedChangeReliability.route,
          },
          {
            name: 'Menu.solutions.management-automation.qo-e-driven-optimization',
            url: Routes.Solution.ManagementAutomation
              .QoEDrivenOptimizationComponent.route,
          },
        ],
      },
      {
        name: 'Menu.service-monitoring',
        children: [
          {
            name: 'Menu.solutions.service-monitoring.aggregated-qo-s-kpis',
            url: Routes.Solution.ServiceMonitoring.AggregatedQoSKPIsComponent
              .route,
          },
          {
            name: 'Menu.solutions.service-monitoring.modern-network-performance',
            url: Routes.Solution.ServiceMonitoring
              .ModernNetworkPerformanceComponent.route,
          },
          {
            name: 'Menu.solutions.service-monitoring.noc-alarm-aggregation',
            url: Routes.Solution.ServiceMonitoring.NOCAlarmAggregationComponent
              .route,
          },
          {
            name: 'Menu.solutions.service-monitoring.quality-sls-sla-design',
            url: Routes.Solution.ServiceMonitoring.QualitySLSSLADesignComponent
              .route,
          },
        ],
      },
      {
        name: 'User EXPERIENCE AUTOMATION',
        children: [
          {
            name: 'Menu.solutions.use-experience-automation.cognitive-customer-experience',
            url: Routes.Solution.UseExperienceAutomation
              .CognitiveCustomerExperienceComponent.route,
          },
          {
            name: 'Menu.solutions.use-experience-automation.user-impact-analysis',
            url: Routes.Solution.UseExperienceAutomation
              .UserImpactAnalysisComponent.route,
          },
          {
            name: 'Menu.solutions.use-experience-automation.quality-of-experience',
            url: Routes.Solution.UseExperienceAutomation
              .QualityOfExperienceComponent.route,
          },
        ],
      },
      {
        name: 'DATA PROCESSING',
        children: [
          {
            name: 'Menu.solutions.data-processing.network-data-processing',
            url: Routes.Solution.DataProcessing.NetworkDataProcessingComponent
              .route,
          },
          {
            name: 'Menu.solutions.data-processing.digital-process-automation',
            url: Routes.Solution.DataProcessing
              .DigitalProcessAutomationComponent.route,
          },
          {
            name: 'Menu.solutions.data-processing.operational-telco-datalake',
            url: Routes.Solution.DataProcessing
              .OperationalTelcoDatalakeComponent.route,
          },
        ],
      },
      /*{
        name: 'Menu.categories.category1',
        children: [
          {
            name: 'Menu.categories.subcategory11',
            url: Routes.Solution.DataModernization.UnifiedEnterpriseData.route,
          },
          {
            name: 'Menu.categories.subcategory12',
            url: Routes.Solution.DataModernization.RealTimeAnalytics.route,
          },
          {
            name: 'Menu.categories.subcategory13',
            url: Routes.Solution.DataModernization.FastDataPipeline.route,
          },
          {
            name: 'Menu.categories.subcategory14',
            url: Routes.Solution.DataModernization.ModernDecisionDeliverySystem.route,
          },
        ],
      },
      {
        name: 'Menu.categories.category2',
        children: [
          {
            name: 'Menu.categories.subcategory21',
            url: Routes.Solution.DataPlatform.ScalableDataLakehouse.route,
          },
          {
            name: 'Menu.categories.subcategory22',
            url: Routes.Solution.DataPlatform.HighPerformanceDataLakes.route,
          },
          {
            name: 'Menu.categories.subcategory23',
            url: Routes.Solution.DataPlatform.DataManagementSecurity.route,
          },
          {
            name: 'Menu.categories.subcategory24',
            url: Routes.Solution.DataPlatform.AutomatedOperationalAnalytics.route,
          },
          {
            name: 'Menu.categories.subcategory25',
            url: Routes.Solution.DataPlatform.DataStreamingService.route,
          },
        ],
      },
      {
        name: 'Menu.categories.category3',
        children: [
          {
            name: 'Menu.categories.subcategory31',
            url: Routes.Solution.AiApplicationBuilder.AIApplicationPlatform.route,
          },
          {
            name: 'Menu.categories.subcategory32',
            url: Routes.Solution.AiApplicationBuilder.EnterpriseAIApplications.route,
          },
        ],
      },
      {
        name: 'Menu.categories.category4',
        children: [
          {
            name: 'Menu.categories.subcategory41',
            url: Routes.Solution.EnterpriseAutomation.HyperDataSeed.route,
          },
          {
            name: 'Menu.categories.subcategory42',
            url: Routes.Solution.EnterpriseAutomation.EnterpriseDigitizationAutomation.route,
          },
        ],
      },*/
    ],
  },
  {
    url: Routes.Catalog.url,
    name: 'Menu.Catalog',
  },
  {
    isUrl: true,
    url: Routes.Catalog.route,
    name: 'Menu.Pricing',
  },
  
]
export interface IMenu {
  isUrl?: boolean;
  url?: string;
  name: string;
  children?: IMenu[];
}
