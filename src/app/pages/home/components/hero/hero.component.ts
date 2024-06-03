import { Component } from '@angular/core';
import {Routes} from "../../../../core/constants/routes";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  protected readonly Routes = Routes;
}
