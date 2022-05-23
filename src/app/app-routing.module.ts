import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'products',
  loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
},
{
  path: 'settings',
  loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
