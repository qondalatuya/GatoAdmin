import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import {HomeComponent} from "@app/home/home.component";
import {ErrorComponent} from "@app/error/error.component";
import {MaterialComponent} from "@app/material/material.component";
import { FormMaterialComponent } from '@app/material/form-material/form-material.component';

const appRoutes: Routes = [
	{path:"home",component:HomeComponent},
	{path:"materiales", component: MaterialComponent},
	{path:"materialform", component: FormMaterialComponent},
	{path:"",component:HomeComponent},
	{path:"**",component:ErrorComponent}
];

export const appRoutingProviders: any[] =[];
export const moduloRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
