import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {
    path: 'user/:userid',
    component: UserProfileComponent,
  }, {
    path: "",
    component: MainComponent
  }, {
    path: "**",
    component: MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

