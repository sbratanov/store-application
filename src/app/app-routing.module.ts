import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: 'products',
  loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
},
{
  path: 'settings',
  loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
},
{
  path: '',
  redirectTo: 'products',
  pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
