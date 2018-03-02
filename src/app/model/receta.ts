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
    constructor(nombre:string){       
             
        console.log("Receta constructor");
        this.nombre=nombre;
        this.imagen='assets/img/marmitako.jpg';
        this.likes=0;
        this.cocinero='anonimo'
        this.descripcion="La marmita de bonito es un plato basado en Thunnus alalunga, cuyo origen se encuentra en los pescadores asturianos, cántabros y vascos. Se trata de un guiso de bonito con patatas, cebolla, pimiento y tomate, principalmente."
        this.isGlutenFree=false;
        this.ingredientes=[];        
    }
    tostring(){
        console.log(`Receta nombre =$(this.nombre)`);
    }

    addIngredientes(ingrediente: string){
        this.ingredientes.push(ingrediente);
    }
}