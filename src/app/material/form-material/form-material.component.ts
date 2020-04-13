import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable,Subscription} from "rxjs";
import {Input} from "@angular/core";


import {MaterialService} from "@app/services/material.service";
import { Material } from '@app/models/material';
import { TipoMaterial } from '@app/models/tipoMaterial';
import { DatafactoryService } from '@app/services/datafactory.service';


@Component({
  selector: 'form-material',
  templateUrl: './form-material.component.html'
})
export class FormMaterialComponent implements OnInit,OnDestroy {

  @Input()
  public material:Material=new Material(0,null,null,null,null,null);
  public tiposMateriales:TipoMaterial[];


  constructor(
     private _materialService:MaterialService,
     private _datafactory:DatafactoryService
  ) { }

  ngOnInit() {
    this._datafactory.obtenerTiposMateriales().subscribe(
      result=>{
        this.tiposMateriales=result;
      },
      error=>{
        console.log(<any>error)
      }
    )
  }
 
  onSubmit(){
    console.log(this.material);
    console.log(JSON.stringify(this.material))
    
    this._materialService.guardarMaterial(this.material).subscribe(
      result=>{
        this._materialService.avisarMaterialAgregado(result)
      },
      error=>{
        console.log(<any>error);
      }
      
    )
  }

  ngOnDestroy(){

  }

}
