import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  { path: '', component: Header1Component },
  { path: 'reactiveform1', component: ReactiveformComponent },
  { path: 'header2', component: Header2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
