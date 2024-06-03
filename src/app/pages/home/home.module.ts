import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SectionSolutionsComponentComponent } from './components/section-solutions-component/section-solutions-component.component';
import { HeroComponent } from './components/hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { SectionKPIComponent } from './components/section-kpi/section-kpi.component';
import { SectionProblemComponent } from './components/section-problem/section-problem.component';
import { SectionUsecaseComponent } from './components/section-usecase/section-usecase.component';
import { SectionReferenceComponent } from './components/section-reference/section-reference.component';
import { SectionInvestingComponent } from './components/section-investing/section-investing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SectionKPIComponent,
    SectionProblemComponent,
    SectionUsecaseComponent,
    HeroComponent,
    HomeComponent,
    SectionInvestingComponent,
    SectionSolutionsComponentComponent,
    SectionReferenceComponent,
  ],
  imports: [CommonModule, TranslateModule, SharedModule, RouterModule],
  exports: [HeroComponent],
})
export class HomeModule {}
