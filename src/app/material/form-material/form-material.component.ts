import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";


import {MaterialService} from "@app/services/material.service";
import { Material } from '@app/models/material';


@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html'
})
export class FormMaterialComponent implements OnInit {

  private materialito$:Observable<Material>;
  private materiales$ :Observable<Material[]>;

  constructor(
     private _materialService:MaterialService
  ) { }

  ngOnInit() {
    this.materialito$= this._materialService.obtenerMaterial(1);
    this.materiales$=this._materialService.obtenerMateriales();    
  }

}
