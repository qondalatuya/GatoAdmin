import {Injectable} from "@angular/core";
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

import {GLOBAL} from "./global";



import {Material} from "../models/material";


@Injectable()
export class MaterialService{
	private url:string;

	constructor (){
		this.url=GLOBAL.apiUrl;
	}

	getClientes(){
		return 
	}

}

