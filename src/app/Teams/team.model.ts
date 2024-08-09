import { Joueur } from "../joueur/joueur.model";

export class Team{
   
    id:number;
    name:string;
    description:string;
    image:string;
    //joueurs: Joueur[];

    constructor(id:number, name:string, description:string, image:string,public  joueurs?: Joueur[]){
       this.name=name;
       this.description=description;
       this.image=image;
       this.id=id
       
    }
}