import { Component } from '@angular/core';

@Component({
  selector: 'app-high-performance-data-lakes',
  templateUrl: './high-performance-data-lakes.component.html',
  styleUrls: ['./high-performance-data-lakes.component.css'],
})
export class HighPerformanceDataLakesComponent {
  ProblemsItems = [
    {
      title: 'high-performance-datalakes.problemsListtitle1',
      description: 'high-performance-datalakes.problemsListdescription1',
    },
    {
      title: 'high-performance-datalakes.problemsListtitle2',
      description: 'high-performance-datalakes.problemsListdescription2',
    },
    {
      title: 'high-performance-datalakes.problemsListtitle3',
      description: 'high-performance-datalakes.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'high-performance-datalakes.solutionsListtitle1',
      content: 'high-performance-datalakes.solutionsListdescription1',
      icon: 'icon9',
    },
    {
      title: 'high-performance-datalakes.solutionsListtitle2',
      content: 'high-performance-datalakes.solutionsListdescription2',
      icon: 'icon6',
    },
    {
      title: 'high-performance-datalakes.solutionsListtitle3',
      content: 'high-performance-datalakes.solutionsListdescription3',
      icon: 'icon2',
    },
    {
      title: 'high-performance-datalakes.solutionsListtitle4',
      content: 'high-performance-datalakes.solutionsListdescription4',
      icon: 'icon3',
    },
  ];
}
