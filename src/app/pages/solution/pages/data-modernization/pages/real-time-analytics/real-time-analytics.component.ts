import { Component } from '@angular/core';

@Component({
  selector: 'app-real-time-analytics',
  templateUrl: './real-time-analytics.component.html',
  styleUrls: ['./real-time-analytics.component.css'],
})
export class RealTimeAnalyticsComponent {
  ProblemsItems = [
    {
      title: 'real-time-analytics.problems-item-title1',
      description: 'real-time-analytics.problems-item-description1',
    },
    {
      title: 'real-time-analytics.problems-item-title2',
      description: 'real-time-analytics.problems-item-description2',
    },
    {
      title: 'real-time-analytics.problems-item-title3',
      description: 'real-time-analytics.problems-item-description3',
    },
  ];

  SolutionsItems = [
    {
      title: 'real-time-analytics.solutions-item-title1',
      content: 'real-time-analytics.solutions-item-description1',
      icon: 'icon9',
    },
    {
      title: 'real-time-analytics.solutions-item-title2',
      content: 'real-time-analytics.solutions-item-description2',
      icon: 'icon3',
    },
    {
      title: 'real-time-analytics.solutions-item-title3',
      content: 'real-time-analytics.solutions-item-description3',
      icon: 'icon7',
    },
    {
      title: 'real-time-analytics.solutions-item-title4',
      content: 'real-time-analytics.solutions-item-description4',
      icon: 'icon5',
    },
  ];
}
