import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SolutionComponent} from "./solution.component";
import {SolutionRouting} from "./solution.routing";



@NgModule({
  declarations: [
    SolutionComponent
  ],
  imports: [
    CommonModule,
    SolutionRouting
  ]
})
export class SolutionModule { }
