import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

interface Profession{
  id:number;
  label:string;
}

interface Data{
  name:string;
  email:string;
  gender:string;
}
@Component({
  selector: 'app-template-reactive',
  templateUrl: './template-reactive.component.html',
  styleUrl: './template-reactive.component.scss'
})
export class TemplateReactiveComponent implements OnInit{
  userForm:FormGroup;
  professions:Profession[];

ngOnInit()
{
  this.professions=[
    {id:0,label:'Professeur'},
    {id:1,label:'Docteur'},
    {id:2,label:'Ingénieure'},
    {id:3,label:'Commerçant'}
  ];
 

this.userForm=new FormGroup({

  user:new FormGroup({
    name:new FormControl('', Validators.required),
    email:new FormControl('',[Validators.required,Validators.email])
  }),
  gender:new FormControl('Male'),
  profession:new FormControl('')
})
}


 onSubmit()
  {
   console.log(this.userForm.value);
    }
  
  get getName()
  {
    return this.userForm.get('user.name')
  }
  get getEmail()
  {
    return this.userForm.get('user.email')
  }
  }


