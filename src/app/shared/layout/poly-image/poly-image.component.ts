import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-poly-image',
  templateUrl: './poly-image.component.html',
  styleUrls: ['./poly-image.component.css'],
})
export class PolyImageComponent {
  @Input() title: string = '';
  @Input() titleClass: string = '';
  @Input() textClass: string = '';


  @Input() list: string[] = [];
  @Input() textBeforeList: string[] = [];
  @Input() textAfterList: string[] = [];

  @Input() imageUrl: string = '';
  @Input() imageClass: string = '';

  @Input() btnText: string = '';
  @Input() BtnClass: string = '';

  @Input() btnLink: string = '/catalog';
  @Input() bgClass: string = '';
  @Input() btnVisible: boolean = true;
  @Input() reverse: boolean = false;
}
