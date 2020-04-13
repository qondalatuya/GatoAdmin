import {Component} from "@angular/core";

import {MaterialService} from "@app/services/material.service";
//import {ActivatedRoute} from "@angular/router";

@Component({
	selector: "home",
	templateUrl: "./home.component.html"

})
export class HomeComponent{

	constructor(
		public  _materialService:MaterialService)
	{
	}

	ngOnInit(){

	}
}