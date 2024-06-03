import { Component } from '@angular/core';

@Component({
  selector: 'app-service-catalog',
  templateUrl: './service-catalog.component.html',
  styleUrls: ['./service-catalog.component.css']
})
export class ServiceCatalogComponent {

  ProblemsItems = [
    {
      title: 'service-catalog.problemsItemTitle1',
      description:
        'service-catalog.problemsItemDescription1',
    },
    {
      title: 'service-catalog.problemsItemTitle2',
      description:
        'service-catalog.problemsItemDescription2',
    },
  ];
}
