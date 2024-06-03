import {AfterContentInit, AfterViewInit, Component, Input} from '@angular/core';

@Component({
  selector: 'app-polyimagereverse',
  templateUrl: './polyimagereverse.component.html',
  styleUrls: ['./polyimagereverse.component.css'],
})
export class PolyimagereverseComponent implements AfterContentInit, AfterViewInit{
  @Input() title: string = '';
  @Input() content: string | string[] = '';
  @Input() imageUrl: string = '';
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Input() btnLink: string = '/catalog';

  @Input() textBeforeList: string = ''; // New input property for the text before the list
  @Input() bgClass: string = '';
  @Input() btnVisible: boolean = true;
  isContentArray: boolean = false;

  constructor() {
  }

  ngAfterContentInit(){
    /* Use in dev */
    this.isContentArray = Array.isArray(this.content);
  }

  ngAfterViewInit(): void {
    /* Use in production */
    //this.isContentArray = Array.isArray(this.content);
  }

  toArray(value: string | string[]): string[] {
    return Array.isArray(value) ? value : [value];
  }
}
