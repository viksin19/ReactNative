import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhysicalInputComponent } from './physical-input/physical-input.component';
import { ExerciseRecomendationComponent } from './exercise-recomendation/exercise-recomendation.component';
import { FoodRecomendationComponent } from './food-recomendation/food-recomendation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginRegisterComponent,
    DashboardComponent,
    PhysicalInputComponent,
    ExerciseRecomendationComponent,
    FoodRecomendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
