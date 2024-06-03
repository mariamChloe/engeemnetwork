import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-we-are-unique',
  templateUrl: './we-are-unique.component.html',
  styleUrls: [
    './we-are-unique.component.css',
    '../../../../../node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class WeAreUniqueComponent {
  ProblemsItems = [
    {
      title: 'R&D and Innovation',
      description:
        'Development of various creative solutions inspired by the analysis and research carried out in order fulfill the real-world needs of our client market requirements. ',
    },
    {
      title: 'Excellence',
      description:
        ' Our solution uses innovative algorithms and techniques, which are customizable and scalable to meet changing market requirements.',
    },
  ];

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  constructor(private translate: TranslateService) {}

  currentSlide: number = 0;
  dotHelper: Array<Number> = [];
  slider!: KeenSliderInstance;
  perView = 1;

  items: any[] = [
    {
      imgUrl: '/assets/images/other/data-world.jpeg',
      title: this.translate.instant('we-are-unique.cardSlider.slide1.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide1.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/fusion.jpeg',
      title: this.translate.instant('we-are-unique.cardSlider.slide2.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide2.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/tunel.webp',
      title: this.translate.instant('we-are-unique.cardSlider.slide3.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide3.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/search.webp',
      title: this.translate.instant('we-are-unique.cardSlider.slide4.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide4.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/data-world.jpeg',
      title: this.translate.instant('we-are-unique.cardSlider.slide5.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide5.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/fusion.jpeg',
      title: this.translate.instant('we-are-unique.cardSlider.slide6.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide6.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/tunel.webp',
      title: this.translate.instant('we-are-unique.cardSlider.slide7.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide7.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/search.webp',
      title: this.translate.instant('we-are-unique.cardSlider.slide8.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide8.subtitle',
      ),
    },

    {
      imgUrl: '/assets/images/other/tunel.webp',
      title: this.translate.instant('we-are-unique.cardSlider.slide9.title'),
      subtitle: this.translate.instant(
        'we-are-unique.cardSlider.slide9.subtitle',
      ),
    },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slides: {
          perView: this.getPerView(),
          spacing: 20,
        },
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
      });
      this.dotHelper = Array.from(
        {
          length: Math.ceil(
            this.slider.track.details.slides.length / this.getPerView(),
          ),
        },
        (_, i) => i,
      );
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  // Add a method to determine the perView value based on screen size
  private getPerView(): number {
    return (this.perView = window.innerWidth < 768 ? 1 : 3); // Adjust the breakpoint as needed
  }
}
