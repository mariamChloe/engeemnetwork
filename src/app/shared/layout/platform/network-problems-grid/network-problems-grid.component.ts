import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-network-problems-grid',
  templateUrl: './network-problems-grid.component.html',
  styleUrls: ['./network-problems-grid.component.css'],
})
export class NetworkProblemsGridComponent {
  @Input() headlinesAlign: 'center' | 'left' | 'right' = 'left';
  @Input() headline: string = '';
  @Input() headlineClass: string = 'lg:max-w-5xl text-2xl lg:text-3xl xl:text-4xl';
  @Input() subHeadline: string = '';
  @Input() items: { title: string; description: string, list?:string[] }[] = [];
  @Input() imgUrl: string = '';


}
