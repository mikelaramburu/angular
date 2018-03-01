/*Clase para encapsular los atributos de una receta */
export class Receta{
    nombre:string;   
    descripcion: string;
    likes: number;
    imagen: string;
    isGlutenFree: boolean;
    cocinero:string;
    ingredientes: string[];
    receta:Receta;

    //Solo es posible un constructor
    constructor(nombre:string){       
             
        console.log("Receta constructor");
        this.nombre=nombre;
        this.imagen='assets/img/receta_default.jpg';
        this.likes=0;
        this.cocinero='anonimo'
        this.descripcion=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum et similique voluptatem molestiae, doloribus esse. Nesciunt dolores optio deleniti sunt, harum vel ab officiis autem, dolore quis quo expedita!"
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