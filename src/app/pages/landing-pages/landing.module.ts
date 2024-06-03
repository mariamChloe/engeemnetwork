import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { LandingRouting } from './landing.routing';
import { AkwabaComponent } from './akwaba/akwaba.component';

@NgModule({
  declarations: [AkwabaComponent],
  imports: [CommonModule, SharedModule, TranslateModule, LandingRouting],
})
export class LandingModule {}
