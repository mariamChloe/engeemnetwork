import { Component } from '@angular/core';

@Component({
  selector: 'app-autonomous-network-services',
  templateUrl: './autonomous-network-services.component.html',
  styleUrl: './autonomous-network-services.component.css'
})
export class AutonomousNetworkServicesComponent {
  public ProblemsItems = [
    {
      title: 'autonomous-network-services.network-problems-grid.ProblemsItems.title1',
      description: 'autonomous-network-services.network-problems-grid.ProblemsItems.description1',
    },
    {
      title: 'autonomous-network-services.network-problems-grid.ProblemsItems.title2',
      description: 'autonomous-network-services.network-problems-grid.ProblemsItems.description2',
    },
    {
      title: 'autonomous-network-services.network-problems-grid.ProblemsItems.title3',
      description: 'autonomous-network-services.network-problems-grid.ProblemsItems.description3',
    },
    {
      title: 'autonomous-network-services.network-problems-grid.ProblemsItems.title4',
      description: 'autonomous-network-services.network-problems-grid.ProblemsItems.description4',
    }
  ];
}
