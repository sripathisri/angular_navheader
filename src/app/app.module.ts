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

@NgModule({
  declarations: [AppComponent, Header1Component, ReactiveformComponent, Header2Component, Header3Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
