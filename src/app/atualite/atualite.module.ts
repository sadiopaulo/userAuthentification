import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualitePageRoutingModule } from './atualite-routing.module';

import { AtualitePage } from './atualite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualitePageRoutingModule
  ],
  declarations: [AtualitePage]
})
export class AtualitePageModule {}
