import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  k:any;
  compo:any[200]=[];
  i=0
  click=()=>
  {
    this.submite=false
    var a:any={
      "id":this.i+1,
      "sub":[],
      "task":[],
      "lastmodi":0
  
    }
  
    this.compo[this.i]=a;
    this.i++
  
  }
  
  prev=-1;
  subvalue=0;
  addsub=(value:any)=>
  {
    if(value.id!=this.prev)
    {
      this.subvalue=this.compo[value.id-1].lastmodi
    this.prev=value.id;
      
    }
  
    this.compo[value.id-1].sub[this.subvalue]=this.subvalue
    this.subvalue++
    this.compo[value.id-1].lastmodi=this.subvalue
    
  
  
  
  }
  term=""
  savesub=(id:any,subid:any)=>
  {
    this.compo[id-1].task[subid]=this.term;
  
  }
  submite=true
  submit=()=>
  {
    for(var ite=0;ite<this.compo.length;ite++)
    {
      console.log("panel "+this.compo[ite].id+"{",this.compo[ite].task+"}")
    }
  }
  }
  