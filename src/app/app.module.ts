import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeComponent} from './layout/home/home.component';
import {IcodbComponent} from './layout/icodb/icodb.component';
import {BlogComponent} from './layout/blog/blog.component';
import {AuthComponent} from './layout/auth/auth.component';
import {PostsComponent} from './layout/posts/posts.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {NewsComponent} from './layout/news/news.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingService} from './app-routing.service';
import { LayoutComponent } from './layout/layout.component';
import {BackendService} from "./backend.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Ng2OdometerModule} from "ng2-odometer";
import {DisqusModule} from "ngx-disqus";
import {CKEditorModule} from "ng2-ckeditor";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./layout/auth/auth-interceptor";
import {AuthGuard} from "./layout/auth/auth.guard";
import { PostCreateComponent } from './layout/posts/post-create/post-create.component';
import { PostListComponent } from './layout/posts/post-list/post-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatProgressSpinnerModule,
  MatToolbarModule
} from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IcodbComponent,
    BlogComponent,
    AuthComponent,
    PostsComponent,
    PageNotFoundComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingService,
    HttpClientModule,
    Ng2OdometerModule.forRoot(),
    DisqusModule.forRoot('inassign'),
    CKEditorModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [BackendService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
