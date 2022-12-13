import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Header4Component } from './header4/header4.component';
import { JsnavbarComponent } from './jsnavbar/jsnavbar.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  { path: '', component: Header1Component },
  { path: 'reactiveform1', component: ReactiveformComponent },
  { path: 'header2', component: Header2Component },
  { path: 'header3', component: Header3Component },
  { path: 'header4', component: Header4Component },
  { path: 'Contact', component: ContactusComponent},
  { path: 'jsnav', component: JsnavbarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
