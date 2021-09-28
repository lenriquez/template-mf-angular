import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    if (!customElements.get('template-mf-angular')) {
      customElements.define('template-mf-angular', ce);
    }

  }

}
