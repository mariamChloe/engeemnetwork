import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
} from '@angular/core';
import { Routes } from '../../../core/constants/routes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string[] = [];
  @Input() textBeforeList: string[] = [];
  @Input() textAfterList: string[] = [];
  @Input() list: string[] = [];
  @Input() imageUrl: string = "assets/images/no-image.svg";
  @Input() enableBtn: boolean = false;
  @Input() enableViewMore: boolean = false;

  @Input() btnText: string = '';
  @Input() btnLink: string = Routes.Catalog.url;
  @Input() catalogLink: boolean = true;

  protected readonly Routes = Routes;
}
