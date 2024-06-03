import { Component } from '@angular/core';

@Component({
  selector: 'app-modern-decision-delivery-system',
  templateUrl: './modern-decision-delivery-system.component.html',
  styleUrls: ['./modern-decision-delivery-system.component.css'],
})
export class ModernDecisionDeliverySystemComponent {
  ProblemsItems = [
    {
      title: 'modern-decision.problemsListtitle1',
      description: 'modern-decision.problemsListdescription1',
    },
    {
      title: 'modern-decision.problemsListtitle2',
      description: 'modern-decision.problemsListdescription2',
    },
    {
      title: 'modern-decision.problemsListtitle3',
      description: 'modern-decision.problemsListdescription3',
    },
  ];

  SolutionsItems = [
    {
      title: 'modern-decision.solutionsListtitle1',
      content: 'modern-decision.solutionsListdescription1',
      icon: 'icon7',
    },
    {
      title: 'modern-decision.solutionsListtitle2',
      content: 'modern-decision.solutionsListdescription2',
      icon: 'icon5',
    },
    {
      title: 'modern-decision.solutionsListtitle3',
      content: 'modern-decision.solutionsListdescription3',
      icon: 'icon3',
    },
    {
      title: 'modern-decision.solutionsListtitle4',
      content: 'modern-decision.solutionsListdescription4',
      icon: 'icon4',
    },
  ];
}
