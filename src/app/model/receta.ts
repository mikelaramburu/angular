/*Clase para encapsular los atributos de una receta */
export class Receta{
    nombre:string;   
    descripcion: string;
    likes: number;
    imagen: string;
    isGlutenFree: boolean;
    cocinero:string;
    ingredientes: string[];
   

    //Solo es posible un constructor
    constructor( 
        nombre : string,        
        cocinero: string, //valor por defecto para 'undefined' o sin parametro
        imagen:string,
        descripcion:string


    ){     
             
        console.log("Receta constructor");
        this.nombre=nombre;
        this.imagen=imagen;
        this.likes=0;
        this.cocinero=cocinero;
        this.descripcion=descripcion;
        this.isGlutenFree=false;
        this.ingredientes=[];        
    }
   
    addIngredientes(ingrediente: string){
        this.ingredientes.push(ingrediente);
    }
}