import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { TableMaterialComponent } from './material/table-material/table-material.component';
import { FormMaterialComponent } from './material/form-material/form-material.component';
import { ErrorComponent } from './error/error.component';
import { MaterialComponent } from './material/material.component';

const routes:Routes=[
    {path:"home",component:HomeComponent},
	{path:"materiales", component: MaterialComponent},
	{path:"materialform", component: FormMaterialComponent},
	{path:"",component:HomeComponent},
	{path:"**",component:ErrorComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}