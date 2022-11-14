import { CaixaScrowComponent } from './cei-caixa-scrow/caixa-scrow/caixa-scrow.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'tela-informacao',component:CaixaScrowComponent},
  {path:'**',redirectTo:'tela-informacao'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
