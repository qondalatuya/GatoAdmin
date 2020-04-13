import{TipoMaterial}from "./tipoMaterial";

export class Material{
	constructor(
		public id:number,
		public nombre:string,
		public tipo:TipoMaterial,
		public existencia: number,
		public unidad:string,
		public precioUnidad: number
		)
	{}
}