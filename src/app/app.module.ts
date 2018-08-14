
import { BaseHomeModule } from './base-home/base-home.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseHomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
