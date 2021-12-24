import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent01Component } from './components/card-component01/card-component01.component';
import { CardComponent02Component } from './components/card-component02/card-component02.component';

const routes: Routes = [
  { path: 'card01', component: CardComponent01Component },
  { path: 'card02', component: CardComponent02Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
