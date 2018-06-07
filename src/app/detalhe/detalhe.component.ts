import { dados } from './../dados';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  name: string;
  god: Object;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['name'];
      console.log(this.name); // Print the parameter to the console. 
    });
  }

  ngOnInit() {
    this.god = this.getGod(this.name);
  }

  getGod(name: string) {
    return dados[name];
  }
}
