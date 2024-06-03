import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";


@Component({
  selector: 'app-user-impact-analysis',
  templateUrl: './user-impact-analysis.component.html',
  styleUrl: './user-impact-analysis.component.css'
})
export class UserImpactAnalysisComponent {
  public ProblemsItems = [
    {
      title: 'user-impact-analysis.problems-item-title1',
      description: 'user-impact-analysis.problems-item-description1',
    },
    {
      title: 'user-impact-analysis.problems-item-title3',
      description: 'user-impact-analysis.problems-item-description3',
    },
    {
      title: 'user-impact-analysis.problems-item-title2',
      description: 'user-impact-analysis.problems-item-description2',
    },
    {
      title: 'user-impact-analysis.problems-item-title4',
      description: 'user-impact-analysis.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "user-impact-analysis.solution-key-feature.Cards.title1",
      text: "user-impact-analysis.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "user-impact-analysis.solution-key-feature.Cards.title2",
      text: "user-impact-analysis.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "user-impact-analysis.solution-key-feature.Cards.title3",
      text: "user-impact-analysis.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "user-impact-analysis.solution-key-feature.Cards.title4",
      text: "user-impact-analysis.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];

}
