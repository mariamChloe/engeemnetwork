import { Component } from '@angular/core';

@Component({
  selector: 'app-enterprise-aiapplications',
  templateUrl: './enterprise-aiapplications.component.html',
  styleUrls: ['./enterprise-aiapplications.component.css'],
})
export class EnterpriseAIApplicationsComponent {
  ProblemsItems = [
    {
      title: 'enterprise-ai-applications.problemsListtitle1',
      description: 'enterprise-ai-applications.problemsListdescription1',
    },
    {
      title: 'enterprise-ai-applications.problemsListtitle2',
      description: 'enterprise-ai-applications.problemsListdescription2',
    },
    {
      title: 'enterprise-ai-applications.problemsListtitle3',
      description: 'enterprise-ai-applications.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'enterprise-ai-applications.solutionsListtitle1',
      content: 'enterprise-ai-applications.solutionsListdescription1',
      icon: 'icon3',
    },
    {
      title: 'enterprise-ai-applications.solutionsListtitle2',
      content: 'enterprise-ai-applications.solutionsListdescription2',
      icon: 'icon6',
    },
    {
      title: 'enterprise-ai-applications.solutionsListtitle3',
      content: 'enterprise-ai-applications.solutionsListdescription3',
      icon: 'icon4',
    },
    {
      title: 'enterprise-ai-applications.solutionsListtitle4',
      content: 'enterprise-ai-applications.solutionsListdescription4',
      icon: 'icon9',
    },
  ];
}
