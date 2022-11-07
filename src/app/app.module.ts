import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './layout/buttons/buttons.component';
import { DisplayComponent } from './layout/display/display.component';
import { OptionsComponent } from './layout/options/options.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DisplayComponent,
    OptionsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  exports: [
    ButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
