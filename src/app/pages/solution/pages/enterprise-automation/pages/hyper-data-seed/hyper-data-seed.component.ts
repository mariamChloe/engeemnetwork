import { Component } from '@angular/core';

@Component({
  selector: 'app-hyper-data-seed',
  templateUrl: './hyper-data-seed.component.html',
  styleUrls: ['./hyper-data-seed.component.css'],
})
export class HyperDataSeedComponent {
  ProblemsItems = [
    {
      title: 'hyper-data-seed.problemsListtitle1',
      description: 'hyper-data-seed.problemsListdescription1',
    },
    {
      title: 'hyper-data-seed.problemsListtitle2',
      description: 'hyper-data-seed.problemsListdescription2',
    },
    {
      title: 'hyper-data-seed.problemsListtitle3',
      description: 'hyper-data-seed.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'hyper-data-seed.solutionsListtitle1',
      content: 'hyper-data-seed.solutionsListdescription1',
      icon: 'icon6',
    },
    {
      title: 'hyper-data-seed.solutionsListtitle2',
      content: 'hyper-data-seed.solutionsListdescription2',
      icon: 'icon3',
    },
    {
      title: 'hyper-data-seed.solutionsListtitle3',
      content: 'hyper-data-seed.solutionsListdescription3',
      icon: 'icon9',
    },
    {
      title: 'hyper-data-seed.solutionsListtitle4',
      content: 'hyper-data-seed.solutionsListdescription4',
      icon: 'icon8',
    },
  ];
}
