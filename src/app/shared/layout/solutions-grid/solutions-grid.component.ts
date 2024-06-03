import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solutions-grid',
  templateUrl: './solutions-grid.component.html',
  styleUrls: ['./solutions-grid.component.css'],
})
export class SolutionsGridComponent {
  @Input() Solutions: { title: string; content: string; icon: string }[] = [];
  @Input() Headline: string = '';
  @Input() SubHeadline: string = '';
}
