import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "@app/error/error.component";
import {MaterialComponent} from "@app/material/material.component";

import {moduloRouting,appRoutingProviders} from "../app.routing";
import {MaterialService} from "@services/material.service";
import { FormMaterialComponent } from './material/form-material/form-material.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    MaterialComponent,
    FormMaterialComponent
  ],
  imports: [
    BrowserModule,
    moduloRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders,MaterialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
