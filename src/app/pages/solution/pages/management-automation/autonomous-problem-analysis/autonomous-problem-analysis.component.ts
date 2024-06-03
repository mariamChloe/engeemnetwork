import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";


@Component({
  selector: 'app-autonomous-problem-analysis',
  templateUrl: './autonomous-problem-analysis.component.html',
  styleUrl: './autonomous-problem-analysis.component.css'
})
export class AutonomousProblemAnalysisComponent {

  public ProblemsItems = [
    {
      title: 'autonomous-problem-analysis.problems-grid.ProblemsItems.title1',
      description: 'autonomous-problem-analysis.problems-grid.ProblemsItems.description1',
    },
    {
      title: 'autonomous-problem-analysis.problems-grid.ProblemsItems.title2',
      description: 'autonomous-problem-analysis.problems-grid.ProblemsItems.description2',
    },
    {
      title: 'autonomous-problem-analysis.problems-grid.ProblemsItems.title3',
      description: 'autonomous-problem-analysis.problems-grid.ProblemsItems.description3',
    },
    {
      title: 'autonomous-problem-analysis.problems-grid.ProblemsItems.title4',
      description: 'autonomous-problem-analysis.problems-grid.ProblemsItems.description4',
    },
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "autonomous-problem-analysis.solution-key-feature.Cards.title1",
      text: "autonomous-problem-analysis.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "autonomous-problem-analysis.solution-key-feature.Cards.title2",
      text: "autonomous-problem-analysis.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "autonomous-problem-analysis.solution-key-feature.Cards.title3",
      text: "autonomous-problem-analysis.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "autonomous-problem-analysis.solution-key-feature.Cards.title4",
      text: "autonomous-problem-analysis.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];
}
