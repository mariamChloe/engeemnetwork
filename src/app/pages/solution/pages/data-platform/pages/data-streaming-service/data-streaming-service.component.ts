import { Component } from '@angular/core';

@Component({
  selector: 'app-data-streaming-service',
  templateUrl: './data-streaming-service.component.html',
  styleUrls: ['./data-streaming-service.component.css'],
})
export class DataStreamingServiceComponent {
  ProblemsItems = [
    {
      title: 'data-streaming-service.problemsListtitle1',
      description: 'data-streaming-service.problemsListdescription1',
    },
    {
      title: 'data-streaming-service.problemsListtitle2',
      description: 'data-streaming-service.problemsListdescription2',
    },
    {
      title: 'data-streaming-service.problemsListtitle3',
      description: 'data-streaming-service.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'data-streaming-service.solutionsListtitle1',
      content: 'data-streaming-service.solutionsListdescription1',
      icon: 'icon8',
    },
    {
      title: 'data-streaming-service.solutionsListtitle2',
      content: 'data-streaming-service.solutionsListdescription2',
      icon: 'icon4',
    },
    {
      title: 'data-streaming-service.solutionsListtitle3',
      content: 'data-streaming-service.solutionsListdescription3',
      icon: 'icon3',
    },
    {
      title: 'data-streaming-service.solutionsListtitle4',
      content: 'data-streaming-service.solutionsListdescription4',
      icon: 'icon6',
    },
  ];
}
