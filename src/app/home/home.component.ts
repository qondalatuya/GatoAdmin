import {Component} from "@angular/core";

import {MaterialService} from "@app/services/material.service";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: "home",
	templateUrl: "/home.component.html"

})
export class HomeComponent{
		
	private mensaje:string="hola que tal";

	constructor(
		private _activatedRoute:ActivatedRoute,
		public  _materialService:MaterialService)
	{
	}

	ngOnInit(){
		/*
		console.log("componente home");
		this._materialService.nombre$.subscribe( texto=>{
			this.mensaje=texto;
			console.log("componenteHome",this.mensaje);
		}
		)
		*/
		
	}
}