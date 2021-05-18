import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"sendemail",
    component:EmailComponent,
    pathMatch:"full"
  }
  ,
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
