import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-old-blue-banner',
  templateUrl: './old-blue-banner.component.html',
  styleUrls: ['./old-blue-banner.component.css'],
})
export class OldBlueBannerComponent {
  @Input() headLine: string[] = ['Unlocking Network Connection Management'];
  @Input() headLineClass: string = 'text-white text-2xl font-bold lg:text-5xl';
  @Input() subHeadline: string[] = [
    'Deploy your One-Click application into your domain',
  ];
  @Input() subHeadLineClass: string = 'text-white text-xl lg:text-4xl mb-2';
  @Input() btnVisible: boolean = true;
  @Input() btnText: string = 'Button.start';
  @Input() btnLink: string = '/catalog';
  @Input() reverseSubHeadlinePosition: boolean = false;
}
