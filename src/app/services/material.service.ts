import {Injectable} from "@angular/core";
//import { Http, Response, Headers, RequestOptions } from '@angular/http'; este está deprecado no se usa mas
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
///import "rxjs/add/operator/map"; ya no es mas necesario a partir de angular 6
import {Observable, Subject} from "rxjs"; //necesario ejecutar un npm install --save rxjs-compat
import {EventEmitter} from "@angular/core";

import {GLOBAL} from "./global";

import {Material} from "../models/material";


@Injectable()
export class MaterialService{
	private url:string;
	public materialAgregado= new Subject<Material>();

	constructor (
		private _http:HttpClient
	){
		this.url=GLOBAL.apiUrl;
	}

	obtenerMateriales(){
		return(this._http.get<Material[]>(this.url+"materiales"));
	}

	guardarMaterial(material:Material){				
		let params=JSON.stringify(material);
		let headers= new HttpHeaders().set("Content-Type","application/json");
		return this._http.post<Material>(this.url+"materiales/agregar",params,{headers:headers , responseType: 'json'} );
	}

	borrarMaterial (id:number){
		return (this._http.delete<Material>(this.url+"materiales/borrar/"+id));
	}

	obtenerMaterial ( id:number){		
		return (this._http.get<Material>(this.url+"materiales/"+id));
	}

	avisarMaterialAgregado(material:Material){
		this.materialAgregado.next(material);
	}

}

