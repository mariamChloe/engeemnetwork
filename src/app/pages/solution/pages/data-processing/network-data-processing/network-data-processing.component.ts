import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";


@Component({
  selector: 'app-network-data-processing',
  templateUrl: './network-data-processing.component.html',
  styleUrl: './network-data-processing.component.css'
})
export class NetworkDataProcessingComponent {
  public ProblemsItems = [
    {
      title: 'network-data-processing.problems-item-title1',
      description: 'network-data-processing.problems-item-description1',
    },
    {
      title: 'network-data-processing.problems-item-title3',
      description: 'network-data-processing.problems-item-description3',
    },
    {
      title: 'network-data-processing.problems-item-title2',
      description: 'network-data-processing.problems-item-description2',
    },
    {
      title: 'network-data-processing.problems-item-title4',
      description: 'network-data-processing.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "network-data-processing.solution-key-feature.Cards.title1",
      text: "network-data-processing.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "network-data-processing.solution-key-feature.Cards.title2",
      text: "network-data-processing.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "network-data-processing.solution-key-feature.Cards.title3",
      text: "network-data-processing.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "network-data-processing.solution-key-feature.Cards.title4",
      text: "network-data-processing.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];
 

}
