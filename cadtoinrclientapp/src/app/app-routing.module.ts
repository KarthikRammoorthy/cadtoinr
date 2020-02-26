import { PageNotFoundComponent } from './modules/layout-modules/page-not-found/page-not-found.component';
import { HomeComponent } from './modules/layout-modules/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      id: 'home',
      label: 'Home',
      breadcrumb: 'Home'
    }
  },
  { path: '**', component: PageNotFoundComponent, data: { id: 'notfound'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
