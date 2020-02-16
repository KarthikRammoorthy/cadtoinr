import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './modules/layout-modules/home/home.component';
import { BreadCrumbComponent } from './modules/layout-modules/bread-crumb/bread-crumb.component';
import { HeaderComponent } from './modules/layout-modules/header/header.component';
import { FooterComponent } from './modules/layout-modules/footer/footer.component';
import { ShellComponent } from './modules/layout-modules/shell/shell.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreadCrumbComponent,
    HeaderComponent,
    FooterComponent,
    ShellComponent,

  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
