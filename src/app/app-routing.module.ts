import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound404Component } from './notfound404/notfound404.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./brainiacs/brainiacs.module').then(m => m.BrainiacsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
