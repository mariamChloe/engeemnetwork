import { Component } from '@angular/core';

@Component({
  selector: 'app-enterprise-digitization-automation',
  templateUrl: './enterprise-digitization-automation.component.html',
  styleUrls: ['./enterprise-digitization-automation.component.css'],
})
export class EnterpriseDigitizationAutomationComponent {
  ProblemsItems = [
    {
      title: 'enterprise-automation.problemsListtitle1',
      description: 'enterprise-automation.problemsListdescription1',
    },
    {
      title: 'enterprise-automation.problemsListtitle2',
      description: 'enterprise-automation.problemsListdescription2',
    },
    {
      title: 'enterprise-automation.problemsListtitle3',
      description: 'enterprise-automation.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'enterprise-automation.solutionsListtitle1',
      content: 'enterprise-automation.solutionsListdescription1',
      icon: 'icon4',
    },
    {
      title: 'enterprise-automation.solutionsListtitle2',
      content: 'enterprise-automation.solutionsListdescription2',
      icon: 'icon3',
    },
    {
      title: 'enterprise-automation.solutionsListtitle3',
      content: 'enterprise-automation.solutionsListdescription3',
      icon: 'icon2',
    },
    {
      title: 'enterprise-automation.solutionsListtitle4',
      content: 'enterprise-automation.solutionsListdescription4',
      icon: 'icon8',
    },
  ];
}
