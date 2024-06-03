import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";

@Component({
  selector: 'app-automated-problem-detection',
  templateUrl: './automated-problem-detection.component.html',
  styleUrl: './automated-problem-detection.component.css'
})
export class AutomatedProblemDetectionComponent {
  public ProblemsItems = [
    {
      title: 'automated-problem-detection.problems-grid.ProblemsItems.title1',
      description: 'automated-problem-detection.problems-grid.ProblemsItems.description1',
    },
    {
      title: 'automated-problem-detection.problems-grid.ProblemsItems.title2',
      description: 'automated-problem-detection.problems-grid.ProblemsItems.description2',
    },
    {
      title: 'automated-problem-detection.problems-grid.ProblemsItems.title3',
      description: 'automated-problem-detection.problems-grid.ProblemsItems.description3',
    },
    {
      title: 'automated-problem-detection.problems-grid.ProblemsItems.title4',
      description: 'automated-problem-detection.problems-grid.ProblemsItems.description4',
    },
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "automated-problem-detection.solution-key-feature.Cards.title1",
      text: "automated-problem-detection.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "automated-problem-detection.solution-key-feature.Cards.title2",
      text: "automated-problem-detection.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "automated-problem-detection.solution-key-feature.Cards.title3",
      text: "automated-problem-detection.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "automated-problem-detection.solution-key-feature.Cards.title4",
      text: "automated-problem-detection.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];
}
