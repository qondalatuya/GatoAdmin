import {Component} from "@angular/core";
import {MaterialService} from "@services/material.service";
import {Material} from "@app/models/Material";
import {HttpClient,HttpClientModule} from "@angular/common/http";

@Component({
	selector: "materialComponent",
	templateUrl: "./material.component.html",
	providers:[MaterialService]
})

export class MaterialComponent{

	public materiales:Material[];
	public nuevoMaterial:Material;

	constructor(
		private _materialService:MaterialService
	)
	{
		this.nuevoMaterial=new Material(null,null,null,null);
	}

	ngOnInit(){
		this._materialService.getMateriales().subscribe(
			result =>{
				this.materiales=result;
				console.log(this.materiales);
			},
			error =>{
				console.log(<any>error);
			}
		)
	}

	
}
