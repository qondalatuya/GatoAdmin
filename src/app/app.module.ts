import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule} from "@app/material/material.module";
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "@app/error/error.component";

import {MaterialService} from "@services/material.service";
import {DatafactoryService} from "@services/datafactory.service"
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [MaterialService,DatafactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
