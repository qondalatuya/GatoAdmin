import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable,Subscription} from "rxjs";
import {Input} from "@angular/core";


import {MaterialService} from "@app/services/material.service";
import { Material } from '@app/models/material';


@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html'
})
export class FormMaterialComponent implements OnInit,OnDestroy {

  public material:Material=new Material(0,null,null,null,null);


  constructor(
     private _materialService:MaterialService
  ) { }

  ngOnInit() {

  }

  onSubmit(){
    this._materialService.guardarMaterial(this.material).subscribe(
      result=>{
        this._materialService.avisarMaterialAgregado(result)
      },
      error=>{

      }
      
    )
  }

  ngOnDestroy(){
    
  }

}
