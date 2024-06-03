import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent {
  @Input() number!: number;
  @Input() title!: string;
  @Input() content!: string;
  @Input() price!: string;
}
