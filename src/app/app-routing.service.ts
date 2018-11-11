import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './layout/home/home.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {IcodbComponent} from './layout/icodb/icodb.component';
import {BlogComponent} from './layout/blog/blog.component';
import {AuthComponent} from './layout/auth/auth.component';
import {NewsComponent} from './layout/news/news.component';
import {ResearchComponent} from './layout/research/research.component';

const appRoutes: Routes = [
      {path: '', component: HomeComponent},
      {path: 'icodb', component: IcodbComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'auth', component: AuthComponent},
      {path: 'news', component: NewsComponent},
      {path: 'research', component: ResearchComponent},
      {path: 'page-not-found', component: PageNotFoundComponent},
      {path: '**', redirectTo: '/page-not-found'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingService{}
