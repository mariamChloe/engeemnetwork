import { Component } from '@angular/core';

@Component({
  selector: 'app-automated-operational-analytics',
  templateUrl: './automated-operational-analytics.component.html',
  styleUrls: ['./automated-operational-analytics.component.css'],
})
export class AutomatedOperationalAnalyticsComponent {
  ProblemsItems = [
    {
      title: 'automated-operational-analytics.problemsListtitle1',
      description: 'automated-operational-analytics.problemsListdescription1',
    },
    {
      title: 'automated-operational-analytics.problemsListtitle2',
      description: 'automated-operational-analytics.problemsListdescription2',
    },
    {
      title: 'automated-operational-analytics.problemsListtitle3',
      description: 'automated-operational-analytics.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'automated-operational-analytics.solutionsListtitle1',
      content: 'automated-operational-analytics.solutionsListdescription1',
      icon: 'icon7',
    },
    {
      title: 'automated-operational-analytics.solutionsListtitle2',
      content: 'automated-operational-analytics.solutionsListdescription2',
      icon: 'icon5',
    },
    {
      title: 'automated-operational-analytics.solutionsListtitle3',
      content: 'automated-operational-analytics.solutionsListdescription3',
      icon: 'icon2',
    },
    {
      title: 'automated-operational-analytics.solutionsListtitle4',
      content: 'automated-operational-analytics.solutionsListdescription4',
      icon: 'icon3',
    },
  ];
}
