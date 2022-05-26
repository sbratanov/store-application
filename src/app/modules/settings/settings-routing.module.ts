import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './components/config/config.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'config'
},
{
  path: 'config',
  component: ConfigComponent
},
{
  path: 'settings',
  component: SettingsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
