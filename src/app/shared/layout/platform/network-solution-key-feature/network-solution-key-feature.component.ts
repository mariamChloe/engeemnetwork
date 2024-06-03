import {Component, Input} from '@angular/core';
import {Routes} from "../../../../core/constants/routes";

@Component({
  selector: 'app-network-solution-key-feature',
  templateUrl: './network-solution-key-feature.component.html',
  styleUrl: './network-solution-key-feature.component.css'
})
export class NetworkSolutionKeyFeatureComponent {
  @Input() firstLine: string = "SOLUTION KEY FEATURES";
  @Input() headLine: string[] = [];
  @Input() subHeadLine: string[] = [];
  @Input() subHeadLineClass: string = "relative z-10 mt-3 text-center text-2xl font-normal mt-5";
  @Input() headLineClass: string = "relative z-10 lg:text-4xl font-bold text-brand-old-blue text-center mb-4";
  @Input() cards: ISolutionCardData[] = [];
  protected readonly Routes = Routes;
  getClass = () => this.cards.length > 0 ? 'md:grid-cols-' + this.cards.length.toString() : 'md:grid-cols-4';
}
export interface ISolutionCardData{
  image: string,
  title: string,
  text: string,
}
