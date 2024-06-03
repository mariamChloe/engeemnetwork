import { Component } from '@angular/core';

@Component({
  selector: 'app-fast-data-pipeline',
  templateUrl: './fast-data-pipeline.component.html',
  styleUrls: ['./fast-data-pipeline.component.css'],
})
export class FastDataPipelineComponent {
  ProblemsItems = [
    {
      title: 'fast-pipeline.problemsListtitle1',
      description: 'fast-pipeline.problemsListdescription1',
    },
    {
      title: 'fast-pipeline.problemsListtitle2',
      description: 'fast-pipeline.problemsListdescription2',
    },
    {
      title: 'fast-pipeline.problemsListtitle3',
      description: 'fast-pipeline.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'fast-pipeline.solutionsListtitle1',
      content: 'fast-pipeline.solutionsListdescription1',
      icon: 'icon3',
    },
    {
      title: 'fast-pipeline.solutionsListtitle2',
      content: 'fast-pipeline.solutionsListdescription2',
      icon: 'icon5',
    },
    {
      title: 'fast-pipeline.solutionsListtitle3',
      content: 'fast-pipeline.solutionsListdescription3',
      icon: 'icon9',
    },
    {
      title: 'fast-pipeline.solutionsListtitle4',
      content: 'fast-pipeline.solutionsListdescription4',
      icon: 'icon7',
    },
  ];
}
