import {Component, Input} from '@angular/core';
import { Routes } from 'src/app/core/constants/routes';

@Component({
  selector: 'app-network-colored-image-grid',
  templateUrl: './network-colored-image-grid.component.html',
  styleUrl: './network-colored-image-grid.component.css'
})
export class NetworkColoredImageGridComponent {

  protected readonly Routes = Routes;
  @Input() headLine: string[] = [];
  @Input() headLineClass: string = "lg:text-5xl font-medium text-brand-old-blue text-center mb-4";

  @Input() subHeadLine: string[] = [];
  @Input() subHeadLineClass: string = "text-center text-2xl font-normal mt-5";

  @Input() pinkSection: boolean = true;
  @Input() pinkSectionImgUrl: string = "";
  @Input() pinkSectionImgBoxClass: string = "bg-[#FFDCE2] flex items-center justify-center py-12 px-12 min-h-[30vh] basis-1/2";
  @Input() pinkSectionImgClass: string = "rounded-2xl border-2 border-brand-old-blue";
  @Input() pinkSectionTitle: string[] = [];
  @Input() pinkSectionTitleClass: string = "lg:text-4xl font-medium text-brand-old-blue mb-4";
  @Input() pinkSectionContent: string[] = [];
  @Input() pinkSectionContentClass: string = "text-xl lg:text-2xl text-brand-old-blue leading-normal";
  @Input() pinkSectionListContent: string[] = [];
  @Input() pinkSectionBtnText: string = "";
  @Input() pinkSectionReverse: boolean = false;

  @Input() yellowSection: boolean = true;
  @Input() yellowSectionImgUrl: string = "";
  @Input() yellowSectionImgBoxClass: string = "bg-[#FFF2D2] flex items-center justify-center py-12 px-12 min-h-[30vh] basis-1/2";
  @Input() yellowSectionImgClass: string = "rounded-2xl border-2 border-brand-old-blue";
  @Input() yellowSectionTitle: string[] = [];
  @Input() yellowSectionTitleClass: string = "lg:text-4xl font-medium text-brand-old-blue mb-4";
  @Input() yellowSectionContent: string[] = [];
  @Input() yellowSectionContentClass: string = "text-xl lg:text-2xl text-brand-old-blue leading-normal";
  @Input() yellowSectionListContent: string[] = [];
  @Input() yellowSectionBtnText: string = "";
  @Input() yellowSectionReverse: boolean = true;

  @Input() turquoiseSection: boolean = true;
  @Input() turquoiseSectionImgUrl: string = "assets/images/no-image.svg";
  @Input() turquoiseSectionImgBoxClass: string = "bg-[#BBD8DC] flex items-center justify-center py-12 px-12 min-h-[30vh] basis-1/2";
  @Input() turquoiseSectionImgClass: string = "rounded-2xl border-2 border-brand-old-blue";
  @Input() turquoiseSectionTitle: string[] = [];
  @Input() turquoiseSectionTitleClass: string = "lg:text-4xl font-medium text-brand-old-blue mb-4";
  @Input() turquoiseSectionContent: string[] = [];
  @Input() turquoiseSectionContentClass: string = "text-xl lg:text-2xl text-brand-old-blue leading-normal";
  @Input() turquoiseSectionListContent: string[] = [];
  @Input() turquoiseSectionBtnText: string = "";
  @Input() turquoiseSectionReverse: boolean = false;

}
