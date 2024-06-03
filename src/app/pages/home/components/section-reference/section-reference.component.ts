import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-reference',
  templateUrl: './section-reference.component.html',
  styleUrls: [
    './section-reference.component.css',
    '../../../../../../node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class SectionReferenceComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  constructor(private translate: TranslateService) {}

  currentSlide: number = 0;
  dotHelper: Array<Number> = [];
  slider!: KeenSliderInstance;
  perView = 1;

  items: any[] = [
    {
      imgUrl: '/assets/images/network-image/engeemnetworkhero2.webp',
      title: this.translate.instant('cardSlider.slide1.title'),
      subtitle: this.translate.instant('cardSlider.slide1.subtitle'),
    },

    {
      imgUrl: 'assets/images/network-image/engeemimageblue.webp',
      title: this.translate.instant('cardSlider.slide2.title'),
      subtitle: this.translate.instant('cardSlider.slide2.subtitle'),
    },

    {
      imgUrl: 'assets/images/network-image/engeemnetworkcodebinaire2.webp',
      title: this.translate.instant('cardSlider.slide3.title'),
      subtitle: this.translate.instant('cardSlider.slide3.subtitle'),
    },

    {
      imgUrl: 'assets/images/network-image/engeemnetworkcodebinaire1.webp',
      title: this.translate.instant('cardSlider.slide4.title'),
      subtitle: this.translate.instant('cardSlider.slide4.subtitle'),
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
            this.slider.track.details.slides.length / this.getPerView()
          ),
        },
        (_, i) => i
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
