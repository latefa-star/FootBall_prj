import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Profession{
  id:number;
  label:string;
}

interface Personne{
  name:string;
  email:string;
  profession:string;
  gender:string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})

export class TemplateDrivenComponent implements OnInit {

  //@ViewChild('f') formPersonne:NgForm;
  @ViewChild('f') formPersonne!: NgForm;
  defaultGender="Male";
  professions:Profession[];
  defaultProfession:Profession;
  data: Personne;

  ngOnInit()
  {
    this.professions=[
      {id:0,label:'Professeur'},
      {id:1,label:'Docteur'},
      {id:2,label:'Ingénieure'},
      {id:3,label:'Commerçant'}
    ];
    this.defaultProfession=this.professions[0];
  }
  onSubmit()
  {
    console.log(this.formPersonne);
    
    this.data={
      name: this.formPersonne.value.user.name,
      email:  this.formPersonne.value.user.email,
      profession: this.formPersonne.value.profession.label,
      gender:this.formPersonne.value.gender


    }
    console.log("proff",this.data.profession)
  }
}
