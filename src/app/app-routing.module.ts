import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MyFormComponent } from './my-form/my-form.component';
import { DirectivetestComponent } from './directivetest/directivetest.component';
import { GreetComponent } from './greet/greet.component';
import { FriendsComponent } from './friends/friends.component';
import { CoffeeshopComponent } from './coffeeshop/coffeeshop.component';
const routes: Routes = [
  { path: 'myform', component: MyFormComponent},
  { path: 'greet', component: GreetComponent},
  { path: 'directive', component: DirectivetestComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'coffeeshop', component: CoffeeshopComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
