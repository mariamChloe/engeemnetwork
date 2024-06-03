import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent {
  @Input() title: string = '';
  @Input() content: string | string[] = '';
  @Input() imageUrl: string = '';
  @Input() firstReadMore: string = '';
  @Input() secondReadMore: string = '';
  @Input() btnText: string = '';
  @Input() modalId: string = '';

  // the view more functionnality

  public readMore: boolean = false;
}
