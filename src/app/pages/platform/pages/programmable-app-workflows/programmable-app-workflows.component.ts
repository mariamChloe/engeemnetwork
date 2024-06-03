import { Component } from '@angular/core';

@Component({
  selector: 'app-programmable-app-workflows',
  templateUrl: './programmable-app-workflows.component.html',
  styleUrl: './programmable-app-workflows.component.css'
})
export class ProgrammableAppWorkflowsComponent {

  public ProblemsItems = [
    {
      title: 'programmable-app-workflows.network-problems-grid.ProblemsItems.title1',
      description: 'programmable-app-workflows.network-problems-grid.ProblemsItems.description1',
      list :['programmable-app-workflows.network-problems-grid.ProblemsItems.list1',
      'programmable-app-workflows.network-problems-grid.ProblemsItems.list2',
      'programmable-app-workflows.network-problems-grid.ProblemsItems.list3',
    ]

    },

    {
      title: 'programmable-app-workflows.network-problems-grid.ProblemsItems.title2',
      description: 'programmable-app-workflows.network-problems-grid.ProblemsItems.description2',
    },
    {
      title: 'programmable-app-workflows.network-problems-grid.ProblemsItems.title3',
      description: 'programmable-app-workflows.network-problems-grid.ProblemsItems.description3',
    },
    {
      title: 'programmable-app-workflows.network-problems-grid.ProblemsItems.title4',
      description: 'programmable-app-workflows.network-problems-grid.ProblemsItems.description4',
    }
  ];

}
