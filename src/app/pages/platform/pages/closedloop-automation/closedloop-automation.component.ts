import { Component } from '@angular/core';

@Component({
  selector: 'app-closedloop-automation',
  templateUrl: './closedloop-automation.component.html',
  styleUrl: './closedloop-automation.component.css'
})
export class ClosedloopAutomationComponent {
  public ProblemsItems = [
    {
      title: 'closed-loop-automation.network-problems-grid.ProblemsItems.title1',
      description: 'closed-loop-automation.network-problems-grid.ProblemsItems.description1',
    },
    {
      title: 'closed-loop-automation.network-problems-grid.ProblemsItems.title2',
      description: 'closed-loop-automation.network-problems-grid.ProblemsItems.description2',
    },
    {
      title: 'closed-loop-automation.network-problems-grid.ProblemsItems.title3',
      description: 'closed-loop-automation.network-problems-grid.ProblemsItems.description3',
    },
    {
      title: 'closed-loop-automation.network-problems-grid.ProblemsItems.title4',
      description: 'closed-loop-automation.network-problems-grid.ProblemsItems.description4',
    }
  ];

}
