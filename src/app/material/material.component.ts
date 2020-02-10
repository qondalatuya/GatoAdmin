import {Component} from "@angular/core";
import {MaterialService} from "@services/material.service";
import {Material} from "@app/models/Material";

@Component({
	selector: "materialComponent",
	templateUrl: "./material.component.html"
})

export class MaterialComponent{

	public materiales:Material[];

	constructor(
		private _materialService:MaterialService
	)
	{
		//this.materiales = this._materialService.getClientes();
	}
}
