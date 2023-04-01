import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EventbookingComponent } from './eventbooking/eventbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    LoginComponent,
    RegisterComponent,
    LoginregisterComponent,
    HomeComponent,
    EventbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
