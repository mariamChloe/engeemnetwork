import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";


@Component({
  selector: 'app-quality-of-experience',
  templateUrl: './quality-of-experience.component.html',
  styleUrl: './quality-of-experience.component.css'
})
export class QualityOfExperienceComponent {
  public ProblemsItems = [
    {
      title: 'quality-of-experience.problems-item-title1',
      description: 'quality-of-experience.problems-item-description1',
    },
    {
      title: 'quality-of-experience.problems-item-title3',
      description: 'quality-of-experience.problems-item-description3',
    },
    {
      title: 'quality-of-experience.problems-item-title2',
      description: 'quality-of-experience.problems-item-description2',
    },
    {
      title: 'quality-of-experience.problems-item-title4',
      description: 'quality-of-experience.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "quality-of-experience.solution-key-feature.Cards.title1",
      text: "quality-of-experience.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "quality-of-experience.solution-key-feature.Cards.title2",
      text: "quality-of-experience.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "quality-of-experience.solution-key-feature.Cards.title3",
      text: "quality-of-experience.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "quality-of-experience.solution-key-feature.Cards.title4",
      text: "quality-of-experience.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];

}
