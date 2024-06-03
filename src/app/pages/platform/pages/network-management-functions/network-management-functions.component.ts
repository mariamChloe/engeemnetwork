import { Component } from '@angular/core';

@Component({
  selector: 'app-network-management-functions',
  templateUrl: './network-management-functions.component.html',
  styleUrl: './network-management-functions.component.css'
})
export class NetworkManagementFunctionsComponent {

  public ProblemsItems = [
    {
      title: 'network-management-functions.network-problems-grid.ProblemsItems.title1',
      description: 'network-management-functions.network-problems-grid.ProblemsItems.description1',
    },
    {
      title: 'network-management-functions.network-problems-grid.ProblemsItems.title2',
      description: 'network-management-functions.network-problems-grid.ProblemsItems.description2',
    },
    {
      title: 'network-management-functions.network-problems-grid.ProblemsItems.title3',
      description: 'network-management-functions.network-problems-grid.ProblemsItems.description3',
    },
    {
      title: 'network-management-functions.network-problems-grid.ProblemsItems.title4',
      description: 'network-management-functions.network-problems-grid.ProblemsItems.description4',
    }
  ];
}
