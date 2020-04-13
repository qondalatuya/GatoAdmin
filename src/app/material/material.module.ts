import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableMaterialComponent} from "./table-material/table-material.component";
import { FormMaterialComponent} from "./form-material/form-material.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialComponent } from './material.component';



@NgModule({
  declarations: [
    TableMaterialComponent,
    FormMaterialComponent,
    MaterialComponent,
  ],
  imports: [
    CommonModule,    
    FormsModule,
    HttpClientModule
  ],
  exports:[TableMaterialComponent,FormMaterialComponent,MaterialComponent]
})
export class MaterialModule { }
