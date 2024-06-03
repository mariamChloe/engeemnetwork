import { Component } from '@angular/core';

@Component({
  selector: 'app-data-management-security',
  templateUrl: './data-management-security.component.html',
  styleUrls: ['./data-management-security.component.css'],
})
export class DataManagementSecurityComponent {
  ProblemsItems = [
    {
      title: 'data-management.problemsListtitle1',
      description: 'data-management.problemsListdescription1',
    },
    {
      title: 'data-management.problemsListtitle2',
      description: 'data-management.problemsListdescription2',
    },
    {
      title: 'data-management.problemsListtitle3',
      description: 'data-management.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'data-management.solutionsListtitle1',
      content: 'data-management.solutionsListdescription1',
      icon: 'icon2',
    },
    {
      title: 'data-management.solutionsListtitle2',
      content: 'data-management.solutionsListdescription2',
      icon: 'icon3',
    },
    {
      title: 'data-management.solutionsListtitle3',
      content: 'data-management.solutionsListdescription3',
      icon: 'icon9',
    },
    {
      title: 'data-management.solutionsListtitle4',
      content: 'data-management.solutionsListdescription4',
      icon: 'icon8',
    },
  ];
}
