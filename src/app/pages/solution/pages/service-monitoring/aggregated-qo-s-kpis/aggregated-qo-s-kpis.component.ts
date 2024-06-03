import { Component } from '@angular/core';
import {
  ISolutionCardData
} from "../../../../../shared/layout/platform/network-solution-key-feature/network-solution-key-feature.component";


@Component({
  selector: 'app-aggregated-qo-s-kpis',
  templateUrl: './aggregated-qo-s-kpis.component.html',
  styleUrl: './aggregated-qo-s-kpis.component.css'
})
export class AggregatedQoSKPIsComponent {

  public ProblemsItems = [
    {
      title: 'aggregated-qo-s-kpis.problems-item-title1',
      description: 'aggregated-qo-s-kpis.problems-item-description1',
    },
    {
      title: 'aggregated-qo-s-kpis.problems-item-title3',
      description: 'aggregated-qo-s-kpis.problems-item-description3',
    },
    {
      title: 'aggregated-qo-s-kpis.problems-item-title2',
      description: 'aggregated-qo-s-kpis.problems-item-description2',
    },
    {
      title: 'aggregated-qo-s-kpis.problems-item-title4',
      description: 'aggregated-qo-s-kpis.problems-item-description4',
    }
  ];
  public Cards: ISolutionCardData[] = [
    {
      title: "aggregated-qo-s-kpis.solution-key-feature.Cards.title1",
      text: "aggregated-qo-s-kpis.solution-key-feature.Cards.text1",
      image: "assets/images/network-image/engeemimageblue.webp"
    },
    {
      title: "aggregated-qo-s-kpis.solution-key-feature.Cards.title2",
      text: "aggregated-qo-s-kpis.solution-key-feature.Cards.text2",
      image: "assets/images/network-image/engeemIArobot.webp"
    },
    {
      title: "aggregated-qo-s-kpis.solution-key-feature.Cards.title3",
      text: "aggregated-qo-s-kpis.solution-key-feature.Cards.text3",
      image: "assets/images/network-image/engemtonnerre.webp"
    },
    {
      title: "aggregated-qo-s-kpis.solution-key-feature.Cards.title4",
      text:"aggregated-qo-s-kpis.solution-key-feature.Cards.text4",
      image: "assets/images/network-image/engeemnetworktension.webp"
    }
  ];
}
