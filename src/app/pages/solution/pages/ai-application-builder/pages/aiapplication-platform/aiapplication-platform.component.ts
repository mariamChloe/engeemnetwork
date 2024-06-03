import { Component } from '@angular/core';

@Component({
  selector: 'app-aiapplication-platform',
  templateUrl: './aiapplication-platform.component.html',
  styleUrls: ['./aiapplication-platform.component.css'],
})
export class AIApplicationPlatformComponent {
  ProblemsItems = [
    {
      title: 'ai-application-platform.problemsListtitle1',
      description: 'ai-application-platform.problemsListdescription1',
    },
    {
      title: 'ai-application-platform.problemsListtitle2',
      description: 'ai-application-platform.problemsListdescription2',
    },
    {
      title: 'ai-application-platform.problemsListtitle3',
      description: 'ai-application-platform.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'ai-application-platform.solutionsListtitle1',
      content: 'ai-application-platform.solutionsListdescription1',
      icon: 'icon3',
    },
    {
      title: 'ai-application-platform.solutionsListtitle2',
      content: 'ai-application-platform.solutionsListdescription2',
      icon: 'icon8',
    },
    {
      title: 'ai-application-platform.solutionsListtitle3',
      content: 'ai-application-platform.solutionsListdescription3',
      icon: 'icon10',
    },
    {
      title: 'ai-application-platform.solutionsListtitle4',
      content: 'ai-application-platform.solutionsListdescription4',
      icon: 'icon2',
    },
  ];
}
