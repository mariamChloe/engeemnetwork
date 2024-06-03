import {
  AutonomousNetworkServicesComponent
} from "../../pages/platform/pages/autonomous-network-services/autonomous-network-services.component";
import {
  ClosedloopAutomationComponent
} from "../../pages/platform/pages/closedloop-automation/closedloop-automation.component";
import {
  NetworkManagementFunctionsComponent
} from "../../pages/platform/pages/network-management-functions/network-management-functions.component";
import {
  AutomatedProblemDetectionComponent
} from "../../pages/solution/pages/management-automation/automated-problem-detection/automated-problem-detection.component";
import {
  AutonomousProblemAnalysisComponent
} from "../../pages/solution/pages/management-automation/autonomous-problem-analysis/autonomous-problem-analysis.component";
import {
  IntentBasedChangeReliabilityComponent
} from "../../pages/solution/pages/management-automation/intent-based-change-reliability/intent-based-change-reliability.component";
import {
  QoEDrivenOptimizationComponent
} from "../../pages/solution/pages/management-automation/qo-e-driven-optimization/qo-e-driven-optimization.component";
import {
  AggregatedQoSKPIsComponent
} from "../../pages/solution/pages/service-monitoring/aggregated-qo-s-kpis/aggregated-qo-s-kpis.component";
import {
  ModernNetworkPerformanceComponent
} from "../../pages/solution/pages/service-monitoring/modern-network-performance/modern-network-performance.component";
import {
  QualitySLSSLADesignComponent
} from "../../pages/solution/pages/service-monitoring/quality-sls-sla-design/quality-sls-sla-design.component";
import { CognitiveCustomerExperienceComponent } from "src/app/pages/solution/pages/use-experience-automation/cognitive-customer-experience/cognitive-customer-experience.component";
import { NetworkDataProcessingComponent } from "src/app/pages/solution/pages/data-processing/network-data-processing/network-data-processing.component";
import { OperationalTelcoDatalakeComponent } from "src/app/pages/solution/pages/data-processing/operational-telco-datalake/operational-telco-datalake.component";
import { DigitalProcessAutomationComponent } from "src/app/pages/solution/pages/data-processing/digital-process-automation/digital-process-automation.component";
import { SectionKPIComponent } from "src/app/pages/home/components/section-kpi/section-kpi.component";

export const Routes = {
  Home: {
    route: "/home"
  },
  Platform: {
    route: "/platform",
    DataSecurity: {route: "/platform/data-security"},
    AiPowered: {route: "/platform/ai-powered"},
    CustomAnalytics: {route: "/platform/custom-analytics"},
    AutomationBuilder: {route: "/platform/automation-builder"},
    DataDriven: {route: "/platform/data-driven"},
    AutomatedOperational: {route: "/platform/automated-operational"},


    AutonomousNetworkServices: {route: "/platform/autonomous-network-services"},
    ClosedLoopAutomation: {route: "/platform/closed-loop-automation"},
    NetworkManagementFunctions: {route: "/platform/network-management-functions"},
    OpenDataPlatform: {route: "/platform/open-data-platform"},
    ProgrammableAppWorkflows: {route: "/platform/programmable-app-workflows"},
  },
  Solution: {
    route: "/solution/",
    ManagementAutomation:{
      route:"/solution/management-automation",
      AutomatedProblemDetection: {
        route:"/solution/management-automation/automated-problem-detection"
      },
      AutonomousProblemAnalysis: {
        route:"/solution/management-automation/autonomous-problem-analysis"
      },
      IntentBasedChangeReliability: {
        route:"/solution/management-automation/intent-based-change-reliability"
      },
      QoEDrivenOptimizationComponent: {
        route:"/solution/management-automation/qo-e-driven-optimization"
      }
    },
    ServiceMonitoring: {
      AggregatedQoSKPIsComponent: {
        route:"/solution/service-monitoring/aggregated-qo-s-kpis"
      },
      ModernNetworkPerformanceComponent: {
        route:"/solution/service-monitoring/modern-network-performance"
      },
      NOCAlarmAggregationComponent: {
        route:"/solution/service-monitoring/noc-alarm-aggregation"
      },
      QualitySLSSLADesignComponent: {
        route:"/solution/service-monitoring/quality-sls-sla-design"
      }
    },
    UseExperienceAutomation: {
      CognitiveCustomerExperienceComponent: {
        route:"/solution/use-experience-automation/cognitive-customer-experience"
      },
      UserImpactAnalysisComponent: {
        route:"/solution/use-experience-automation/user-impact-analysis"
      },
      QualityOfExperienceComponent: {
        route:"/solution/use-experience-automation/quality-of-experience"
      },
     
    },
    DataProcessing: {
      NetworkDataProcessingComponent: {
        route:"/solution/data-processing/network-data-processing"
      },
      OperationalTelcoDatalakeComponent: {
        route:"/solution/data-processing/operational-telco-datalake"
      },
      DigitalProcessAutomationComponent: {
        route:"/solution/data-processing/digital-process-automation"
      },
     
    },

    AiApplicationBuilder: {
      route: "/solution/ai-application-builder",
      AIApplicationPlatform: {route: "/solution/ai-application-builder/ai-application-platform"},
      EnterpriseAIApplications: {route: "/solution/ai-application-builder/enterprise-ai-applications"},
    },
    DataModernization: {
      route: "/solution/data-modernisation",
      FastDataPipeline: {route: "/solution/data-modernisation/fast-data-pipeline"},
      ModernDecisionDeliverySystem: {route: "/solution/data-modernisation/modern-decision-delivery-system"},
      RealTimeAnalytics: {route: "/solution/data-modernisation/real-time-analytics"},
      UnifiedEnterpriseData: {route: "/solution/data-modernisation/unified-enterprise-data"},
    },
    DataPlatform: {
      route: "/solution/enterprise-data-platform",
      AutomatedOperationalAnalytics: {route: "/solution/enterprise-data-platform/automated-operational-analytics"},
      DataManagementSecurity: {route: "/solution/enterprise-data-platform/data-management-and-security"},
      DataStreamingService: {route: "/solution/enterprise-data-platform/data-streaming-service"},
      HighPerformanceDataLakes: {route: "/solution/enterprise-data-platform/high-performance-data-lakes"},
      ScalableDataLakehouse: {route: "/solution/enterprise-data-platform/scalable-data-lakehouse"},
    },
    EnterpriseAutomation: {
      route: "/solution/enterprise-automation",
      HyperDataSeed: {route: "/solution/enterprise-automation/hyper-data-seed"},
      EnterpriseDigitizationAutomation: {route: "/solution/enterprise-automation/enterprise-digitization-and-automation"},
    },
   
  },
  Catalog: {
    route: "/catalog#marketplace",
    url: "/catalog"
  },
  Article: { route: "/article" },
  Pricing: { route: "/pricing" },
  Insight: { route: "/insights" },
}
