import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";

@Component({
  selector: 'app-digital-process-automation',
  templateUrl: './digital-process-automation.component.html',
  styleUrl: './digital-process-automation.component.css'
})
export class DigitalProcessAutomationComponent {
  public ProblemsItems = [
    {
      title: 'digital-process-automation.problems-item-title1',
      description: 'digital-process-automation.problems-item-description1',
    },
    {
      title: 'digital-process-automation.problems-item-title3',
      description: 'digital-process-automation.problems-item-description3',
    },
    {
      title: 'digital-process-automation.problems-item-title2',
      description: 'digital-process-automation.problems-item-description2',
    },
    {
      title: 'digital-process-automation.problems-item-title4',
      description: 'digital-process-automation.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "digital-process-automation.solution-key-feature.Cards.title1",
      text: "digital-process-automation.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "digital-process-automation.solution-key-feature.Cards.title2",
      text: "digital-process-automation.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "digital-process-automation.solution-key-feature.Cards.title3",
      text: "digital-process-automation.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "digital-process-automation.solution-key-feature.Cards.title4",
      text: "digital-process-automation.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];

}
