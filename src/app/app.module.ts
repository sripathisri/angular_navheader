import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Header4Component } from './header4/header4.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JsnavbarComponent } from './jsnavbar/jsnavbar.component';

@NgModule({
  declarations: [AppComponent, Header1Component, ReactiveformComponent, Header2Component, Header3Component, Header4Component, ContactusComponent, JsnavbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
