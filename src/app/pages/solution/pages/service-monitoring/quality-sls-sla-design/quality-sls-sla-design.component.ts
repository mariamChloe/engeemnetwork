import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";

@Component({
  selector: 'app-quality-sls-sla-design',
  templateUrl: './quality-sls-sla-design.component.html',
  styleUrl: './quality-sls-sla-design.component.css'
})
export class QualitySLSSLADesignComponent {
  public ProblemsItems = [
    {
      title: 'quality-sls-sla-design.problems-item-title1',
      description: 'quality-sls-sla-design.problems-item-description1',
    },
    {
      title: 'quality-sls-sla-design.problems-item-title3',
      description: 'quality-sls-sla-design.problems-item-description3',
    },
    {
      title: 'quality-sls-sla-design.problems-item-title2',
      description: 'quality-sls-sla-design.problems-item-description2',
    },
    {
      title: 'quality-sls-sla-design.problems-item-title4',
      description: 'quality-sls-sla-design.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "quality-sls-sla-design.solution-key-feature.Cards.title1",
      text: "quality-sls-sla-design.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "quality-sls-sla-design.solution-key-feature.Cards.title2",
      text: "quality-sls-sla-design.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "quality-sls-sla-design.solution-key-feature.Cards.title3",
      text: "quality-sls-sla-design.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "quality-sls-sla-design.solution-key-feature.Cards.title4",
      text: "quality-sls-sla-design.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];

}
