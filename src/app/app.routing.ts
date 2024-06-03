import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceCatalogComponent } from './pages/service-catalog/service-catalog.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AkwabaComponent } from './pages/landing-pages/akwaba/akwaba.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeBlogComponent } from './pages/blog/home-blog/home-blog.component';
import { ArticleComponent } from './pages/blog/article/article.component';
import { AboutUsComponent } from './pages/common/about-us/about-us.component';
import { TechnologyAndExpertiseComponent } from './pages/common/technology-and-expertise/technology-and-expertise.component';
import { MicroserviceComponent } from './pages/common/technology-and-expertise/pages/microservice/microservice.component';
import { AutomationComponent } from './pages/common/technology-and-expertise/pages/automation/automation.component';
import { StreamingComponent } from './pages/common/technology-and-expertise/pages/streaming/streaming.component';
import { AnalyticsComponent } from './pages/common/technology-and-expertise/pages/analytics/analytics.component';
import { StackComponent } from './pages/common/technology-and-expertise/pages/stack/stack.component';
import { NetworkServiceComponent } from './pages/common/technology-and-expertise/pages/network-service/network-service.component';
import { WeAreUniqueComponent } from './pages/common/we-are-unique/we-are-unique.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
    },
  },

  { path: 'we-are-unique', component: WeAreUniqueComponent },
  {
    path: 'technology-and-expertise/network-service',
    component: NetworkServiceComponent,
  },
  { path: 'technology-and-expertise/stack', component: StackComponent },
  { path: 'technology-and-expertise/analytics', component: AnalyticsComponent },
  {
    path: 'technology-and-expertise/automation',
    component: AutomationComponent,
  },
  { path: 'technology-and-expertise/streaming', component: StreamingComponent },
  {
    path: 'technology-and-expertise/microservice',
    component: MicroserviceComponent,
  },

  {
    path: 'technology-and-expertise',
    component: TechnologyAndExpertiseComponent,
  },
  {
    path: 'why-engeem',
    component: AboutUsComponent,
  },
  {
    path: 'catalog',
    component: ServiceCatalogComponent,
    data: {
      fragment: 'marketplace',
      title: 'Catalog',
    },
  },
  {
    path: 'article',
    component: HomeBlogComponent,
    data: {
      title: 'Blog',
    },
  },
  {
    path: 'article/:slug',
    component: ArticleComponent,
    data: {
      title: 'Blog',
    },
  },
  {
    path: 'akwaba',
    component: AkwabaComponent,
    data: {
      title: 'Akwaba',
    },
  },
  {
    path: 'inscription',
    component: SignInComponent,
    data: {
      title: 'SignIn',
    },
  },
  {
    path: 'catalog/:id',
    component: ServiceCatalogComponent,
    data: {
      title: 'Catalog',
    },
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      title: 'Pricing',
    },
  },
  {
    path: 'platform',
    loadChildren: () =>
      import('./pages/platform/platform.module').then((m) => m.PlatformModule),
    data: {
      title: 'Platform',
    },
  },
  {
    path: 'solution',
    loadChildren: () =>
      import('./pages/solution/solution.module').then((m) => m.SolutionModule),
    data: {
      title: 'Solution',
    },
  },
  {
    path: '404',
    component: PageNotfoundComponent,
    data: {
      title: 'NotFound',
    },
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  /**
   * Landing Pages
   *
   */

  {
    path: 'landing-pages',
    loadChildren: () =>
      import('./pages/landing-pages/landing.module').then(
        (m) => m.LandingModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 10],
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRouting {}
 