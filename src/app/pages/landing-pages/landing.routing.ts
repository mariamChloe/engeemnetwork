import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkwabaComponent } from './akwaba/akwaba.component';

const routes: Routes = [{ path: 'akwaba', component: AkwabaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRouting {}
