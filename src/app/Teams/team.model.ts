import { Joueur } from "../joueur/joueur.model";

export class Team{
   
    name:string;
    description:string;
    image:string;
    //joueurs: Joueur[];

    constructor( name:string, description:string, image:string,public  joueurs?: Joueur[],public id?:number){
       this.name=name;
       this.description=description;
       this.image=image;
       
    }
}