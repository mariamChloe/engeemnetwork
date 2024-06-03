import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problems-grid',
  templateUrl: './problems-grid.component.html',
  styleUrls: ['./problems-grid.component.css'],
})
export class ProblemsGridComponent {
  @Input() headlinesAlign: 'center' | 'left' | 'right' = 'left';
  @Input() headline: string = '';
  @Input() subheadline: string = '';
  @Input() items: { title: string; description: string }[] = [];
  @Input() imgUrl: string = '';
}
