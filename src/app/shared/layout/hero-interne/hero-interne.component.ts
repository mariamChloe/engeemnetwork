import {Component, Input} from '@angular/core';
import {Routes} from "../../../core/constants/routes";

@Component({
  selector: 'app-hero-interne',
  templateUrl: './hero-interne.component.html',
  styleUrls: ['./hero-interne.component.css'],
})
export class HeroInterneComponent {
  @Input() Headline: string[] = ["hero-interne.headline1", "hero-interne.headline2"];
  @Input() subHeadline: string[] = ["hero-interne.subHeadline"];
  @Input()subHeadlineClass: string = "";

  @Input() BannerText: string = 'hero-interne.BannerText';
  @Input() Subline: string = 'hero-interne.Subline';
  @Input() floatImgUrl: string = '/assets/images/ansii.svg';
  @Input() floatImgAlt: string = 'Ansii logo';
  @Input() floatImgClass: string = 'relative lg:absolute lg:bottom-[6rem] lg:right-12 max-w-[10rem] max-h-[10rem]';
  @Input() floatImgVisible: boolean = false;
  @Input() BtnVisible: Boolean = true;
  @Input() BtnText: string = "Button.start";
  @Input() BtnClass: string = "btn-rounded btn-turquoise text-lg lg:text-2xl uppercase relative z-10";
  @Input() BtnLink: string = "/catalog";
  @Input() BannerBtnVisible: Boolean = true;
  @Input() BannerBtnText: string = "Button.explore";
  @Input() BannerBtnClass: string = "btn-rounded btn-outline-white-old-blue text-xl lg:text-2xl xl:text-3xl transition-colors";
  @Input() BannerBtnLink: string = Routes.Catalog.url;
  @Input() catalogLink: boolean = true;
  @Input() CustomClass: "cyan"|"teal"|"gray" = "cyan";

  routes = Routes;

  public class = {
    cyan: "from-cyan-50 to-cyan-200",
    teal: "from-teal-50 to-teal-200",
    gray: "from-gray-50 to-gray-300"
  }


  protected readonly Routes = Routes;
}
