import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import {HomeComponent} from "@app/home/home.component";
import {ErrorComponent} from "@app/error/error.component"

const appRoutes: Routes = [
	{path:"home",component:HomeComponent},
	{path:"",component:HomeComponent},
	{path:"**",component:ErrorComponent}
];

export const appRoutingProviders: any[] =[];
export const moduloRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
