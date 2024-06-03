import { Component } from '@angular/core';

@Component({
  selector: 'app-unified-enterprise-data',
  templateUrl: './unified-enterprise-data.component.html',
  styleUrls: ['./unified-enterprise-data.component.css'],
})
export class UnifiedEnterpriseDataComponent {
  ProblemsItems = [
    {
      title: 'unified-enterprise-data.problems-item-title1',
      description: 'unified-enterprise-data.problems-item-description1',
    },
    {
      title: 'unified-enterprise-data.problems-item-title2',
      description: 'unified-enterprise-data.problems-item-description2',
    },
    {
      title: 'unified-enterprise-data.problems-item-title3',
      description: 'unified-enterprise-data.problems-item-description3',
    },
  ];

  SolutionsItems = [
    {
      title: 'unified-enterprise-data.solutions-item-title1',
      content: 'unified-enterprise-data.solutions-item-description1',
      icon: 'icon3',
    },
    {
      title: 'unified-enterprise-data.solutions-item-title2',
      content: 'unified-enterprise-data.solutions-item-description2',
      icon: 'icon4',
    },
    {
      title: 'unified-enterprise-data.solutions-item-title3',
      content: 'unified-enterprise-data.solutions-item-description3',
      icon: 'icon10',
    },
    {
      title: 'unified-enterprise-data.solutions-item-title4',
      content: 'unified-enterprise-data.solutions-item-description4',
      icon: 'icon6',
    },
  ];
}
