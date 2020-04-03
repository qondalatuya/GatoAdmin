import {Component} from "@angular/core";
import {MaterialService} from "@services/material.service";
import {Material} from "@app/models/material";
import {HttpClient,HttpClientModule} from "@angular/common/http";
import {Observable,Subscription} from "rxjs";

@Component({
	selector: "materialComponent",
	templateUrl: "./material.component.html"
})

export class MaterialComponent{

	public materiales:Material[];
	public nuevoMaterial:Material;
	
	
	constructor(
		private _materialService:MaterialService
	)
	{
		this.nuevoMaterial=new Material(0,null,null,null,null);
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
	}

	onSubmit(){
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
		this._materialService.borrarMaterial(material.id).subscribe(
			result =>{
				this.ngOnInit();
			},
			error =>{
				console.log(<any>error);
			}
		)		
	}
}
