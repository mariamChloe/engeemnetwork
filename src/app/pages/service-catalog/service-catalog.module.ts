import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceCatalogComponent} from './service-catalog.component';
import {SharedModule} from "../../shared/shared.module";
import {MarketplaceComponent} from './components/marketplace/marketplace.component';
import {TranslateModule} from "@ngx-translate/core";
import {ToastrModule} from "ngx-toastr";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ClipboardModule} from "ngx-clipboard";
import {DirectiveModule} from "../../core/directives/directive.module";
import {ObserversModule} from "@angular/cdk/observers";

@NgModule({
  declarations: [
    ServiceCatalogComponent,
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    ToastrModule,
    ReactiveFormsModule,
    FormsModule,
    ClipboardModule,
    DirectiveModule,
    ObserversModule
  ]
})
export class ServiceCatalogModule {
}
