import { Component } from '@angular/core';

@Component({
  selector: 'app-scalable-data-lakehouse',
  templateUrl: './scalable-data-lakehouse.component.html',
  styleUrls: ['./scalable-data-lakehouse.component.css'],
})
export class ScalableDataLakehouseComponent {
[x: string]: any|string;
  ProblemsItems = [
    {
      title: 'scalable-data-lakehouse.problemsListtitle1',
      description: 'scalable-data-lakehouse.problemsListdescription1',
    },
    {
      title: 'scalable-data-lakehouse.problemsListtitle2',
      description: 'scalable-data-lakehouse.problemsListdescription2',
    },
    {
      title: 'scalable-data-lakehouse.problemsListtitle3',
      description: 'scalable-data-lakehouse.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'scalable-data-lakehouse.solutionsListtitle1',
      content: 'scalable-data-lakehouse.solutionsListdescription1',
      icon: 'icon6',
    },
    {
      title: 'scalable-data-lakehouse.solutionsListtitle2',
      content: 'scalable-data-lakehouse.solutionsListdescription2',
      icon: 'icon9',
    },
    {
      title: 'scalable-data-lakehouse.solutionsListtitle3',
      content: 'scalable-data-lakehouse.solutionsListdescription3',
      icon: 'icon10',
    },
    {
      title: 'scalable-data-lakehouse.solutionsListtitle4',
      content: 'scalable-data-lakehouse.solutionsListdescription4',
      icon: 'icon8',
    },
  ];
}
