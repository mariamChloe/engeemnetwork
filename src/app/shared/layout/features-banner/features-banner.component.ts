import {Component, Input} from '@angular/core';
import {Routes} from "../../../core/constants/routes";

@Component({
  selector: 'app-features-banner',
  templateUrl: './features-banner.component.html',
  styleUrls: ['./features-banner.component.css']
})
export class FeaturesBannerComponent {
  @Input() headLine: string[] = ["How We're Handling Technologies for Faster Analytics"];
  @Input() headLineClass: string = "py-2 lg:pt-12 text-center text-brand-old-blue";
  @Input() subHeadLine: string[] = [];
  @Input() subHeadLineClass: string = "lg:text-2xl text-xl py-2 text-center text-grid-400";
  @Input() featuresContainerClass: string = "grid md:grid-cols-2 lg:grid-cols-5 my-10 gap-2 lg:gap-8 items-center justify-center";
  @Input() featuresItemsClass: string = "flex flex-col items-center justify-center cursor-pointer";
  @Input() featuresItems: {
    iconUrl: string,
    text: string,
    id: string
  }[] = [
    {
      iconUrl: "/assets/images/Icones Services/ngm-kandle.svg",
      text: "Kandle Explorer",
      id: "SWL-NGM-KDLE-EXPL-01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmAIOS.svg",
      text: "Machine Learning and AI Model Builds",
      id: "SWL-NGM-AIOS-MODEL-01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmDATA-SEED.svg",
      text: "NGM-Data Seed",
      id: "SWL-NGM-DATASEED-01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmDEEPER.svg",
      text: "Data Analytics Acceleration Engine",
      id: "SWL-NGMDEEPER-01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmDOTS.svg",
      text: "Securable Data-Object Management & Store",
      id: "SWL-NGM-DOTS-01"
    },
    /*{
      iconUrl: "/assets/images/Icones Services/ngmESDM.svg",
      text: "Lorem ipsum dolor sit amet consectetur elit.",
      id: ""
    },*/
    {
      iconUrl: "/assets/images/Icones Services/ngmKASE.svg",
      text: "ENGEEM Kase - Knowledge-based Operational Analytics",
      id: "SWL-NGM-KASE-01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmSOAN.svg",
      text: "Data Analytics Orchestration & Automation Service",
      id: "SWL-NGM-SOAN-01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmYAAM-NBI.svg",
      text: "YAAM Data Exposure Automation",
      id: "SWL-NGM-YAAM-N01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmYAAM-SBI.svg",
      text: "YAAM Data Ingestion Automation",
      id: "SWL-NGM-YAAM-S01"
    },
    {
      iconUrl: "/assets/images/Icones Services/ngmYIALI.svg",
      text: "Data Stream-Acceleration Service",
      id: "SWL-NGM-DTLAKE-01"
    }
  ];
  protected readonly Routes = Routes;
}
