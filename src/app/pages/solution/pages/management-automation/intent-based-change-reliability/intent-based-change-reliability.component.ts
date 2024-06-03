import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";

@Component({
  selector: 'app-intent-based-change-reliability',
  templateUrl: './intent-based-change-reliability.component.html',
  styleUrl: './intent-based-change-reliability.component.css'
})
export class IntentBasedChangeReliabilityComponent {
  public ProblemsItems = [
    {
      title: 'intent-based-change-reliability.problems-item-title1',
      description: 'intent-based-change-reliability.problems-item-description1',
    },
    {
      title: 'intent-based-change-reliability.problems-item-title3',
      description: 'intent-based-change-reliability.problems-item-description3',
    },
    {
      title: 'intent-based-change-reliability.problems-item-title2',
      description: 'intent-based-change-reliability.problems-item-description2',
    },
    {
      title: 'intent-based-change-reliability.problems-item-title4',
      description: 'intent-based-change-reliability.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "intent-based-change-reliability.solution-key-feature.Cards.title1",
      text: "intent-based-change-reliability.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"

    },
    {
      title: "intent-based-change-reliability.solution-key-feature.Cards.title2",
      text: "intent-based-change-reliability.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "intent-based-change-reliability.solution-key-feature.Cards.title3",
      text: "intent-based-change-reliability.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "intent-based-change-reliability.solution-key-feature.Cards.title4",
      text: "intent-based-change-reliability.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];

}
