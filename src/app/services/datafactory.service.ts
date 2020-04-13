import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {GLOBAL} from "./global";
import { TipoMaterial } from '@app/models/tipoMaterial';


@Injectable({
  providedIn: 'root'
})
export class DatafactoryService {
  private url:string=GLOBAL.apiUrl;
  
  constructor(   
    private _http:HttpClient) 
  { };

  ngOnInit(){
    
  }

  obtenerTiposMateriales () :Observable<TipoMaterial[]>{
    return this._http.get<TipoMaterial[]>(this.url+"materiales/tipos");
  }
}
