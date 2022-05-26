import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ConfigComponent } from './components/config/config.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    ConfigComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
