import {Component, OnDestroy, OnInit} from "@angular/core";
import {MaterialService} from "@services/material.service";
import {Material} from "@app/models/material";
import {Subscription} from "rxjs";

@Component({
	selector: "table-material",
	templateUrl: "./table-material.component.html"
})

export class TableMaterialComponent implements OnInit,OnDestroy{

	public materiales:Material[];
	private suscripcion:Subscription;	
	
	constructor(
		private _materialService:MaterialService
	)
	{
	}

	ngOnInit(){
		this._materialService.obtenerMateriales().subscribe(
			result =>{
				this.materiales=result;
			},
			error =>{
				console.log(<any>error);
			}
		)

		this.suscripcion=this._materialService.materialAgregado.subscribe(
			material=>{
				this.materiales.push(material);
			}
		)
	}

	borrar( material:Material){
		this._materialService.borrarMaterial(material.id).subscribe(
			result =>{
				let indexABorrar:number;
				for (let i = 0; i <  this.materiales.length; i++ ){
					if (this.materiales[i].id==result.id){
						indexABorrar=i;
					}
				}
				this.materiales.splice(indexABorrar,1);
			},
			error =>{
				console.log(<any>error);
			}
		)		
	}

	ngOnDestroy(){
		this.suscripcion.unsubscribe();
	}
}
