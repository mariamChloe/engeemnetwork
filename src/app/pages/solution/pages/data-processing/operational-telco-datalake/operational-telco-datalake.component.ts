import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";


@Component({
  selector: 'app-operational-telco-datalake',
  templateUrl: './operational-telco-datalake.component.html',
  styleUrl: './operational-telco-datalake.component.css'
})
export class OperationalTelcoDatalakeComponent {
  public ProblemsItems = [
    {
      title: 'operational-telco-datalake.problems-item-title1',
      description: 'operational-telco-datalake.problems-item-description1',
    },
    {
      title: 'operational-telco-datalake.problems-item-title3',
      description: 'operational-telco-datalake.problems-item-description3',
    },
    {
      title: 'operational-telco-datalake.problems-item-title2',
      description: 'operational-telco-datalake.problems-item-description2',
    },
    {
      title: 'operational-telco-datalake.problems-item-title4',
      description: 'operational-telco-datalake.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "operational-telco-datalake.solution-key-feature.Cards.title1",
      text: "operational-telco-datalake.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "operational-telco-datalake.solution-key-feature.Cards.title2",
      text: "operational-telco-datalake.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "operational-telco-datalake.solution-key-feature.Cards.title3",
      text: "operational-telco-datalake.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "operational-telco-datalake.solution-key-feature.Cards.title4",
      text: "operational-telco-datalake.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];
 

}
