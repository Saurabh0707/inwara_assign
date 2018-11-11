import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeComponent} from './layout/home/home.component';
import {IcodbComponent} from './layout/icodb/icodb.component';
import {BlogComponent} from './layout/blog/blog.component';
import {AuthComponent} from './layout/auth/auth.component';
import {ResearchComponent} from './layout/research/research.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {NewsComponent} from './layout/news/news.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingService} from './app-routing.service';
import { LayoutComponent } from './layout/layout.component';
import {BackendService} from "./backend.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IcodbComponent,
    BlogComponent,
    AuthComponent,
    ResearchComponent,
    PageNotFoundComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingService,
    HttpClientModule
    ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
