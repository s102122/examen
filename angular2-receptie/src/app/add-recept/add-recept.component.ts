import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recept } from '../recept'; 

@Component({
  selector: 'app-add-recept',
  templateUrl: './add-recept.component.html',
  styleUrls: ['./add-recept.component.css']
})
export class AddReceptComponent implements OnInit {
	
	private model = new Recept('','','','');

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
	  if(!((localStorage.getItem(this.model.naam)) == 'undefined')) {
		  localStorage.setItem(this.model.naam, JSON.stringify(this.model));
	  }  
  }
}
