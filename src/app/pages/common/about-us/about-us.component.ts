import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  ProblemsItems = [
    {
      title: 'about.oneimagegridheading1',
      description: 'about.oneimagegridsubheading1',
    },
    {
      title: 'about.oneimagegridheading2',
      description: 'about.oneimagegridsubheading2',
    },
  ];
}
