import { dados } from './../dados';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  deuses = [];
  keys = Object.keys(dados);
  

  ngOnInit() {
    for(var i in this.keys){
      let id = this.keys[i]
      this.deuses.push(dados[id]);
    }
    console.log(this.deuses);
    
  }

}
