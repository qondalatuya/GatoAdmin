import {Component, OnDestroy, OnInit} from "@angular/core";
import {MaterialService} from "@services/material.service";
import {Material} from "@app/models/material";
import {HttpClient,HttpClientModule} from "@angular/common/http";
import {Observable,Subscription} from "rxjs";

@Component({
	selector: "materialComponent",
	templateUrl: "./material.component.html"
})

export class MaterialComponent implements OnInit,OnDestroy{

	public materiales:Material[];
	public nuevoMaterial:Material;

	private suscripcion:Subscription;
	
	
	
	constructor(
		private _materialService:MaterialService
	)
	{
		this.nuevoMaterial=new Material(0,null,null,null,null);
	}

	ngOnInit(){
		this.suscripcion=this._materialService.materialAgregado.subscribe(
			material=>{
				this.materiales.push(material);
			}
		)


		this._materialService.obtenerMateriales().subscribe(
			result =>{
				this.materiales=result;
			},
			error =>{
				console.log(<any>error);
			}
		)
		
	}

	onSubmit(){
		console.log(this.nuevoMaterial);
		this._materialService.guardarMaterial(this.nuevoMaterial).subscribe(
			result =>{
				this.materiales.push(result);
				this.nuevoMaterial=new Material(0,null,null,null,null);
			},
			error =>{
				console.log(<any> error);
			}
		)
		
	}

	borrar( material:Material){
		console.log(material);
		this._materialService.borrarMaterial(material.id).subscribe(
			result =>{
				this.ngOnInit();
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
