import { Component } from '@angular/core';
import {Routes} from "../../../core/constants/routes";
import {IMenu, Menu} from "../../../core/constants/menu";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public routes = Routes;
  public menu: IMenu[] = Menu;
}
