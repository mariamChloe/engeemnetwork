import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Routes } from 'src/app/core/constants/routes';

@Component({
  selector: 'app-network-hero-platform',
  templateUrl: './network-hero-platform.component.html',
  styleUrls: ['./network-hero-platform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkHeroPlatformComponent {
  @Input() Headline: string[] = [
    'hero-interne.headline1',
    'hero-interne.headline2',
  ];
  @Input() HeadlineClass: string = 'leading-normal font-black text-brand-old-blue';
  @Input() subHeadlineClass: string = '';

  @Input() imgUrl: string = '';
  @Input() heroClass: string = '';


  @Input() HeadlineClassContainer: string = 'rounded-md py-16 lg:pt-16 lg:pb-24 lg:w-3/4';
  @Input() subHeadline: string[] = ['hero-interne.subHeadline'];
  @Input() subHeadlineVisible: boolean = true;
  @Input() showPulse1: boolean = true;
  @Input() showPulse2: boolean = true;
  @Input() showPulse3: boolean = true;
  @Input() BannerText: string = 'hero-interne.BannerText';
  @Input() BannerTextClass: string = 'text-center lg:text-start text-2xl lg:text-3xl xl:text-4xl';
  @Input() Subline: string = 'hero-interne.Subline';
  @Input() floatImgUrl: string = '/assets/images/ansii.svg';
  @Input() floatImgAlt: string = 'Ansii logo';
  @Input() floatImgClass: string =
    'relative lg:absolute lg:bottom-[6rem] lg:right-12 max-w-[10rem] max-h-[10rem]';
  @Input() floatImgVisible: boolean = false;
  @Input() BtnVisible: Boolean = true;
  @Input() BtnText: string = 'Button.start';
  @Input() BtnClass: string =
    'btn-rounded btn-turquoise text-lg lg:text-2xl uppercase relative z-10';
  @Input() BtnLink: string = '/catalog';
  @Input() BannerBtnVisible: Boolean = true;
  @Input() BannerBtnText: string = 'Button.explore';
  @Input() BannerBtnClass: string =
    'btn-rounded btn-outline-old-blue text-xl lg:text-2xl xl:text-3xl transition-colors';
  @Input() BannerBtnLink: string = Routes.Catalog.url;
  @Input() catalogLink: boolean = true;
  @Input() CustomClass: 'cyan' | 'teal' | 'gray' = 'cyan';

  routes = Routes;

  public class = {
    cyan: 'from-cyan-50 to-cyan-200',
    teal: 'from-teal-50 to-teal-200',
    gray: 'from-gray-50 to-gray-300',
  };

  protected readonly Routes = Routes;
}
