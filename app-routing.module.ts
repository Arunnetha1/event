import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventbookingComponent } from './eventbooking/eventbooking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ {path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'home', component:HomeComponent},
{path:'eventbooking' , component:EventbookingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
