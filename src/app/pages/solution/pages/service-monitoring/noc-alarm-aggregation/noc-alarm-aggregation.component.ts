import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";

@Component({
  selector: 'app-noc-alarm-aggregation',
  templateUrl: './noc-alarm-aggregation.component.html',
  styleUrl: './noc-alarm-aggregation.component.css'
})
export class NOCAlarmAggregationComponent {
  public ProblemsItems = [
    {
      title: 'noc-alarm-aggregation.problems-item-title1',
      description: 'noc-alarm-aggregation.problems-item-description1',
    },
    {
      title: 'noc-alarm-aggregation.problems-item-title3',
      description: 'noc-alarm-aggregation.problems-item-description3',
    },
    {
      title: 'noc-alarm-aggregation.problems-item-title2',
      description: 'noc-alarm-aggregation.problems-item-description2',
    },
    {
      title: 'noc-alarm-aggregation.problems-item-title4',
      description: 'noc-alarm-aggregation.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "noc-alarm-aggregation.solution-key-feature.Cards.title1",
      text: "noc-alarm-aggregation.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "noc-alarm-aggregation.solution-key-feature.Cards.title2",
      text: "noc-alarm-aggregation.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "noc-alarm-aggregation.solution-key-feature.Cards.title3",
      text: "noc-alarm-aggregation.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "noc-alarm-aggregation.solution-key-feature.Cards.title4",
      text:"noc-alarm-aggregation.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];

}
