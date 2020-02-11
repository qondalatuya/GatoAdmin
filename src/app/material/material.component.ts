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

	constructor(
		private _materialService:MaterialService
	)
	{
		//this.materiales = this._materialService.getClientes();
	}

	ngOnInit(){
		this._materialService.getMateriales().subscribe(
			result =>{
				this.materiales=result;
				console.log(this.materiales);
			},
			error =>{
				console.log(<any>error);
			})
	}
}
