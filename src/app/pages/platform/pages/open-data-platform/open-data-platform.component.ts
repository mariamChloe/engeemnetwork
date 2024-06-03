import { Component } from '@angular/core';

@Component({
  selector: 'app-open-data-platform',
  templateUrl: './open-data-platform.component.html',
  styleUrl: './open-data-platform.component.css'
})
export class OpenDataPlatformComponent {
  public ProblemsItems = [
    {
      title: 'open-data-platform.network-problems-grid.ProblemsItems.title1',
      description: 'open-data-platform.network-problems-grid.ProblemsItems.description1',
    },
    {
      title: 'open-data-platform.network-problems-grid.ProblemsItems.title2',
      description: 'open-data-platform.network-problems-grid.ProblemsItems.description2',
    },
    {
      title: 'open-data-platform.network-problems-grid.ProblemsItems.title3',
      description: 'open-data-platform.network-problems-grid.ProblemsItems.description3',
    },
    {
      title: 'open-data-platform.network-problems-grid.ProblemsItems.title4',
      description: 'open-data-platform.network-problems-grid.ProblemsItems.description4',
    }
  ];
}
