import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "@app/error/error.component";
import {MaterialComponent} from "@app/material/material.component";

import {moduloRouting,appRoutingProviders} from "../app.routing";
import {MaterialService} from "@services/material.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    moduloRouting
  ],
  providers: [appRoutingProviders,MaterialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
