import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualitePage } from './atualite.page';

const routes: Routes = [
  {
    path: '',
    component: AtualitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualitePageRoutingModule {}
