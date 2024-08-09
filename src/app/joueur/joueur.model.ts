export class Joueur{
    name:string;
    age:number;
    id:number;
   // team:string;
    constructor(id:number,name:string ,age:number) //,team:string)
    {
        this.name=name;
        this.age=age;
        this.id=id;
       // this.team=team;
    }
}