import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";


@Component({
  selector: 'app-modern-network-performance',
  templateUrl: './modern-network-performance.component.html',
  styleUrl: './modern-network-performance.component.css'
})
export class ModernNetworkPerformanceComponent {
  public ProblemsItems = [
    {
      title: 'modern-network-performance.problems-item-title1',
      description: 'modern-network-performance.problems-item-description1',
    },
    {
      title: 'modern-network-performance.problems-item-title3',
      description: 'modern-network-performance.problems-item-description3',
    },
    {
      title: 'modern-network-performance.problems-item-title2',
      description: 'modern-network-performance.problems-item-description2',
    },
    {
      title: 'modern-network-performance.problems-item-title4',
      description: 'modern-network-performance.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "modern-network-performance.solution-key-feature.Cards.title1",
      text: "modern-network-performance.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "modern-network-performance.solution-key-feature.Cards.title2",
      text: "modern-network-performance.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "modern-network-performance.solution-key-feature.Cards.title3",
      text: "modern-network-performance.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "modern-network-performance.solution-key-feature.Cards.title4",
      text:"modern-network-performance.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];

}
