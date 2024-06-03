import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-network-striped-banner',
  templateUrl: './network-striped-banner.component.html',
  styleUrl: './network-striped-banner.component.css'
})
export class NetworkStripedBannerComponent {
  @Input() headLine: string[] = [];
  @Input() headLineClass: string = "text-2xl lg:text-4xl py-8 text-center font-bold text-white";
  @Input() textLeft: string = "";
  @Input() textRight: string = "";
  @Input() image: string = "assets/images/network-image/Background4.jpg";
  @Input() imageClass: string = "";


}
