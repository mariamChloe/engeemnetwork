import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { InsightsResourcesComponent } from './layout/insights-resources/insights-resources.component';
import { RouterLink } from '@angular/router';
import { PolyImageComponent } from './layout/poly-image/poly-image.component';
import { PolyimagereverseComponent } from './layout/polyimagereverse/polyimagereverse.component';
import { CardComponent } from './ui/card/card.component';
import { HeroInterneComponent } from './layout/hero-interne/hero-interne.component';
import { ProblemsGridComponent } from './layout/problems-grid/problems-grid.component';
import { SolutionsGridComponent } from './layout/solutions-grid/solutions-grid.component';
import { TwoImagesComponent } from './layout/two-images/two-images.component';
import { FeaturesBannerComponent } from './layout/features-banner/features-banner.component';
import { OldBlueBannerComponent } from './layout/old-blue-banner/old-blue-banner.component';
import { LoaderComponent } from './layout/loader/loader.component';
import { HeroInternePlatformComponent } from './layout/hero-interne-platform/hero-interne-platform.component';
import { UsecaseCardComponent } from './ui/usecase-card/usecase-card.component';
import { OfferCardComponent } from './ui/offer-card/offer-card.component';
import { ServiceCardComponent } from './ui/service-card/service-card.component';
import { HubSpotFormComponent } from './layout/hub-spot-form/hub-spot-form.component';
import { ViewerFormComponent } from './layout/viewer-form/viewer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NetworkHeroPlatformComponent } from './layout/platform/network-hero-platform/network-hero-platform.component';
import { NetworkProblemsGridComponent } from './layout/platform/network-problems-grid/network-problems-grid.component';
import { NetworkGridImagesComponent } from './layout/platform/network-grid-images/network-grid-images.component';
import { NetworkColoredImageGridComponent } from './layout/platform/network-colored-image-grid/network-colored-image-grid.component';
import { NetworkStripedBannerComponent } from './layout/platform/network-striped-banner/network-striped-banner.component';
import { NetworkSolutionKeyFeatureComponent } from './layout/platform/network-solution-key-feature/network-solution-key-feature.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    InsightsResourcesComponent,
    PolyImageComponent,
    PolyimagereverseComponent,
    CardComponent,
    HeroInterneComponent,
    ProblemsGridComponent,
    SolutionsGridComponent,
    TwoImagesComponent,
    FeaturesBannerComponent,
    OldBlueBannerComponent,
    LoaderComponent,
    HeroInternePlatformComponent,
    UsecaseCardComponent,
    OfferCardComponent,
    ServiceCardComponent,
    HubSpotFormComponent,
    ViewerFormComponent,
    NetworkHeroPlatformComponent,
    NetworkProblemsGridComponent,
    NetworkGridImagesComponent,
    NetworkColoredImageGridComponent,
    NetworkStripedBannerComponent,
    NetworkSolutionKeyFeatureComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    InsightsResourcesComponent,
    PolyImageComponent,
    PolyimagereverseComponent,
    HeroInterneComponent,
    ProblemsGridComponent,
    SolutionsGridComponent,
    CardComponent,
    TwoImagesComponent,
    FeaturesBannerComponent,
    OldBlueBannerComponent,
    LoaderComponent,
    HeroInternePlatformComponent,
    UsecaseCardComponent,
    OfferCardComponent,
    ServiceCardComponent,
    HubSpotFormComponent,
    ViewerFormComponent,
    NetworkHeroPlatformComponent,
    NetworkProblemsGridComponent,
    NetworkGridImagesComponent,
    NetworkColoredImageGridComponent,
    NetworkStripedBannerComponent,
    NetworkSolutionKeyFeatureComponent,
  ],
})
export class SharedModule {}
