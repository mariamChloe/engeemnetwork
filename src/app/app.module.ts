import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { PlatformModule } from './pages/platform/platform.module';
import { ServiceCatalogModule } from './pages/service-catalog/service-catalog.module';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PricingComponent } from './pages/pricing/pricing.component';
import { Interceptor } from './core/helpers/interceptor.service';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ArticleComponent } from './pages/blog/article/article.component';
import { HomeBlogComponent } from './pages/blog/home-blog/home-blog.component';
import { StandardModule } from './pages/common/standard.module';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    ArticleComponent,
    PageNotfoundComponent,
    SignInComponent,
    HomeBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    PlatformModule,
    BrowserAnimationsModule,
    FormsModule,
    HomeModule,
    SharedModule,
    StandardModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ServiceCatalogModule,
    SweetAlert2Module.forRoot(),
    // ngx-translate and the loader module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
