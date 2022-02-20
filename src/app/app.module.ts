import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendsComponent } from './friends/friends.component';
import { RouterModule, Routes } from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { DirectivetestComponent } from './directivetest/directivetest.component';
import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    FriendsComponent,
    GreetComponent,
    DirectivetestComponent,
    CoffeeshopComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  // exports:[
  //   RouterModule
  // ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
