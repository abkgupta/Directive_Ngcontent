import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrcComponent } from './prc/prc.component';

const routes: Routes = [
  {
    path: 'prc',
    component: PrcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
