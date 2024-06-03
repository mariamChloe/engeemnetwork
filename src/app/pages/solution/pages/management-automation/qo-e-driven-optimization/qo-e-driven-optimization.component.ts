import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";

@Component({
  selector: 'app-qo-e-driven-optimization',
  templateUrl: './qo-e-driven-optimization.component.html',
  styleUrl: './qo-e-driven-optimization.component.css'
})
export class QoEDrivenOptimizationComponent {
  public ProblemsItems = [
    {
      title: 'qo-e-driven-optimization.problems-item-title1',
      description: 'qo-e-driven-optimization.problems-item-description1',
    },
    {
      title: 'qo-e-driven-optimization.problems-item-title3',
      description: 'qo-e-driven-optimization.problems-item-description3',
    },
    {
      title: 'qo-e-driven-optimization.problems-item-title2',
      description: 'qo-e-driven-optimization.problems-item-description2',
    },
    {
      title: 'qo-e-driven-optimization.problems-item-title4',
      description: 'qo-e-driven-optimization.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "qo-e-driven-optimization.solution-key-feature.Cards.title1",
      text: "qo-e-driven-optimization.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"

    },
    {
      title: "qo-e-driven-optimization.solution-key-feature.Cards.title2",
      text: "qo-e-driven-optimization.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"

    },
    {
      title: "qo-e-driven-optimization.solution-key-feature.Cards.title3",
      text: "qo-e-driven-optimization.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"

    },
    {
      title: "qo-e-driven-optimization.solution-key-feature.Cards.title4",
      text:"qo-e-driven-optimization.solution-key-feature.Cards.text4",
      image: "assets/images/network-image//engeemnetworktension.webp"

    }
  ];

}
