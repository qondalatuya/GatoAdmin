import {Injectable} from "@angular/core";
//import { Http, Response, Headers, RequestOptions } from '@angular/http'; este está deprecado no se usa mas
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
///import "rxjs/add/operator/map"; ya no es mas necesario a partir de angular 6
import {Observable} from "rxjs"; //necesario ejecutar un npm install --save rxjs-compat

import {GLOBAL} from "./global";

import {Material} from "../models/material";


@Injectable()
export class MaterialService{
	public url:string;

	constructor (
		public _http:HttpClient
	){
		this.url=GLOBAL.apiUrl;
	}

	getMateriales():Observable<any>{
		return(this._http.get(this.url+"materiales"));
	}

}

